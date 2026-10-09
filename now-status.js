(function () {
  var STATUS_OPTIONS = [
    { id: "studying", emoji: "📚", text: "Studying Informatics at IU's Luddy School." },
    { id: "class", emoji: "🎓", text: "In class." },
    { id: "coding", emoji: "💻", text: "Coding on a project." },
    { id: "gaming", emoji: "🎮", text: "Gaming." },
    { id: "gym", emoji: "🏋️", text: "At the gym." },
    { id: "eating", emoji: "🍕", text: "Eating." },
    { id: "break", emoji: "💤", text: "Taking a break." },
    { id: "sleeping", emoji: "😴", text: "Sleeping." }
  ];

  function findOption(id) {
    for (var i = 0; i < STATUS_OPTIONS.length; i++) {
      if (STATUS_OPTIONS[i].id === id) return STATUS_OPTIONS[i];
    }
    return STATUS_OPTIONS[0];
  }

  function statusParagraphHtml(opt) {
    return '<p class="card-text now-status" id="nowStatus" data-status-id="' +
      opt.id + '">' + opt.emoji + ' ' + opt.text + '</p>';
  }

  async function init() {
    if (!window.claude || typeof window.claude.use !== "function") return;

    var statusEl = document.getElementById("nowStatus");
    var editBtn = document.getElementById("nowEditBtn");
    if (!statusEl || !editBtn) return;

    var user = await window.claude.use("user");
    var isOwner = false;
    try {
      isOwner = user ? await user.isOwner() : false;
    } catch (e) {
      isOwner = false;
    }
    if (!isOwner) return;

    editBtn.hidden = false;
    editBtn.addEventListener("click", openPicker);

    function openPicker() {
      var current = statusEl.dataset.statusId;
      var select = document.createElement("select");
      select.className = "now-select";
      select.setAttribute("aria-label", "What are you doing right now?");

      STATUS_OPTIONS.forEach(function (o) {
        var optionEl = document.createElement("option");
        optionEl.value = o.id;
        optionEl.textContent = o.emoji + " " + o.text;
        if (o.id === current) optionEl.selected = true;
        select.appendChild(optionEl);
      });

      statusEl.hidden = true;
      editBtn.hidden = true;
      statusEl.insertAdjacentElement("afterend", select);
      select.focus();

      function closePicker() {
        if (select.isConnected) select.remove();
        statusEl.hidden = false;
        editBtn.hidden = false;
      }

      select.addEventListener("change", function () {
        var chosen = findOption(select.value);
        commit(chosen);
        closePicker();
      });

      select.addEventListener("blur", closePicker);
      select.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closePicker();
      });
    }

    async function commit(opt) {
      statusEl.dataset.statusId = opt.id;
      statusEl.textContent = opt.emoji + " " + opt.text;

      try {
        var res = await fetch(location.pathname, { cache: "no-store" });
        var html = await res.text();
        var pattern = /<p class="card-text now-status" id="nowStatus" data-status-id="[^"]*">[\s\S]*?<\/p>/;
        if (!pattern.test(html)) return;
        var updated = html.replace(pattern, statusParagraphHtml(opt));

        var artifact = await window.claude.use("artifact");
        if (!artifact) return;
        await artifact.publish(updated);
      } catch (e) {
        /* a stale local edit is harmless; the next load reflects the true state */
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
