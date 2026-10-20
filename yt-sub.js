(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  Array.prototype.forEach.call(document.querySelectorAll(".yt-tile"), function (tile) {
    var btn = tile.querySelector(".yt-sub");
    var label = tile.querySelector(".yt-sub-label");
    if (!btn || !label) return;
    var busy = false;

    tile.addEventListener("click", function (e) {
      if (!btn.contains(e.target)) return;
      e.preventDefault();
      if (busy) return;
      busy = true;

      var url = tile.getAttribute("href");
      btn.classList.remove("is-subscribed");
      void btn.offsetWidth;
      btn.classList.add("is-subscribed");
      label.textContent = "Subscribed";

      setTimeout(function () {
        var w = window.open(url, "_blank");
        if (w) {
          w.opener = null;
        } else {
          window.location.href = url;
        }
      }, reduce ? 350 : 750);

      setTimeout(function () {
        btn.classList.remove("is-subscribed");
        label.textContent = "Subscribe";
        busy = false;
      }, 2600);
    });
  });
})();
