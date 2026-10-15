(function () {
  var nav = document.querySelector(".tabs");
  if (!nav) return;

  var TITLES = {
    ty: "Ty Grimes",
    projects: "Projects | Ty Grimes",
    hobbies: "Hobbies | Ty Grimes",
    about: "About | Ty Grimes",
    photos: "Photos | Ty Grimes"
  };

  var indicator = document.createElement("span");
  indicator.className = "tabs-indicator";
  indicator.setAttribute("aria-hidden", "true");
  nav.insertBefore(indicator, nav.firstChild);

  var links = Array.prototype.slice.call(nav.querySelectorAll("a[data-target]"));
  var views = {};
  Array.prototype.forEach.call(document.querySelectorAll(".view"), function (el) {
    views[el.dataset.view] = el;
  });

  function currentLink() {
    return nav.querySelector('a[aria-current="page"]') || links[0];
  }

  function moveTo(el) {
    if (!el) return;
    indicator.style.width = el.offsetWidth + "px";
    indicator.style.height = el.offsetHeight + "px";
    indicator.style.transform =
      "translate(" + el.offsetLeft + "px," + el.offsetTop + "px)";
  }

  function settle() {
    moveTo(currentLink());
    requestAnimationFrame(function () {
      indicator.classList.add("ready");
    });
  }

  function showView(name, opts) {
    opts = opts || {};
    if (!views[name]) name = "ty";

    Object.keys(views).forEach(function (key) {
      views[key].hidden = key !== name;
    });

    links.forEach(function (link) {
      if (link.dataset.target === name) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (TITLES[name]) document.title = TITLES[name];

    if (opts.animate !== false && window.applyDropIn) {
      window.applyDropIn(views[name]);
    }

    if (opts.scroll !== false) {
      window.scrollTo(0, 0);
    }
  }

  function go(name) {
    if (currentLink().dataset.target === name) return;
    showView(name);
    moveTo(nav.querySelector('a[data-target="' + name + '"]'));
    indicator.classList.add("ready");
    try {
      history.replaceState(null, "", "#" + name);
    } catch (e) {}
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      go(link.dataset.target);
    });
    link.addEventListener("mouseenter", function () {
      moveTo(link);
      indicator.classList.add("ready");
    });
    link.addEventListener("focus", function () {
      moveTo(link);
      indicator.classList.add("ready");
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll("a[data-target]"), function (link) {
    if (link.closest(".tabs")) return;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      go(link.dataset.target);
    });
  });

  nav.addEventListener("mouseleave", function () {
    indicator.classList.remove("ready");
  });

  window.addEventListener("resize", function () { moveTo(currentLink()); });

  window.addEventListener("hashchange", function () {
    var name = (location.hash || "").replace("#", "") || "ty";
    showView(name);
    moveTo(nav.querySelector('a[data-target="' + name + '"]'));
  });

  var initial = (location.hash || "").replace("#", "") || "ty";
  showView(initial, { scroll: false });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(settle);
  } else {
    settle();
  }
})();
