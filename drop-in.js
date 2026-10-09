(function () {
  function animate(container) {
    if (!container) return;
    var items = Array.prototype.slice.call(container.children);
    items.forEach(function (el) {
      el.classList.remove("drop-in");
      void el.offsetWidth;
      el.style.setProperty("--drop-delay", (Math.random() * 0.35).toFixed(2) + "s");
      el.style.setProperty("--drop-rot", (Math.random() * 12 - 6).toFixed(1) + "deg");
      el.classList.add("drop-in");
    });
  }

  function animateView(view) {
    if (!view) return;
    animate(view.querySelector(".rail"));
    animate(view.querySelector(".grid-2"));
  }

  window.applyDropIn = animateView;
})();
