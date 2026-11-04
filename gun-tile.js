(function () {
  if (!window.matchMedia || !window.matchMedia("(hover: none)").matches) return;

  Array.prototype.forEach.call(document.querySelectorAll(".gun-tile"), function (tile) {
    tile.addEventListener("click", function () {
      tile.classList.toggle("is-on");
    });
  });
})();
