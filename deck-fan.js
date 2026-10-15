(function () {
  var BASE = "cards/deck/";
  var CARDS = [
    ["An Offer You Can't Refuse", "an-offer-you-can-t-refuse.jpg"],
    ["April O'Neil, Human Element", "april-o-neil-human-element.jpg"],
    ["Arcane Signet", "arcane-signet.jpg"],
    ["Astral Cornucopia", "astral-cornucopia.jpg"],
    ["Buried Ruin", "buried-ruin.jpg"],
    ["Cephalid Coliseum", "cephalid-coliseum.jpg"],
    ["Cloud Key", "cloud-key.jpg"],
    ["Codex Shredder", "codex-shredder.jpg"],
    ["Cyberdrive Awakener", "cyberdrive-awakener.jpg"],
    ["Darksteel Citadel", "darksteel-citadel.jpg"],
    ["Deadeye Navigator", "deadeye-navigator.jpg"],
    ["Dramatic Reversal", "dramatic-reversal.jpg"],
    ["Echo Storm", "echo-storm.jpg"],
    ["Efficient Construction", "efficient-construction.jpg"],
    ["Emry, Lurker of the Loch", "emry-lurker-of-the-loch.jpg"],
    ["Essence Flux", "essence-flux.jpg"],
    ["Etherium Sculptor", "etherium-sculptor.jpg"],
    ["Everflowing Chalice", "everflowing-chalice.jpg"],
    ["Fabricate", "fabricate.jpg"],
    ["Fellwar Stone", "fellwar-stone.jpg"],
    ["Forging the Anchor", "forging-the-anchor.jpg"],
    ["Foundry Inspector", "foundry-inspector.jpg"],
    ["Ghostly Flicker", "ghostly-flicker.jpg"],
    ["High Tide", "high-tide.jpg"],
    ["Hullbreaker Horror", "hullbreaker-horror.jpg"],
    ["Illusionist's Stratagem", "illusionist-s-stratagem.jpg"],
    ["Isochron Scepter", "isochron-scepter.jpg"],
    ["Jhoira's Familiar", "jhoira-s-familiar.jpg"],
    ["Jin-Gitaxias, Progress Tyrant", "jin-gitaxias-progress-tyrant.jpg"],
    ["Lightning Greaves", "lightning-greaves.jpg"],
    ["Lonely Sandbar", "lonely-sandbar.jpg"],
    ["Manifold Key", "manifold-key.jpg"],
    ["Mechanized Production", "mechanized-production.jpg"],
    ["Mind Stone", "mind-stone.jpg"],
    ["Mirrex", "mirrex.jpg"],
    ["Mirrodin Besieged", "mirrodin-besieged.jpg"],
    ["Moonsnare Prototype", "moonsnare-prototype.jpg"],
    ["Muddle the Mixture", "muddle-the-mixture.jpg"],
    ["Mystic Forge", "mystic-forge.jpg"],
    ["Narset, Parter of Veils", "narset-parter-of-veils.jpg"],
    ["Negate", "negate.jpg"],
    ["Nettlecyst", "nettlecyst.jpg"],
    ["Ornithopter", "ornithopter.jpg"],
    ["Ornithopter of Paradise", "ornithopter-of-paradise.jpg"],
    ["Padeem, Consul of Innovation", "padeem-consul-of-innovation.jpg"],
    ["Peregrine Drake", "peregrine-drake.jpg"],
    ["Phyrexian Metamorph", "phyrexian-metamorph.jpg"],
    ["Pithing Needle", "pithing-needle.jpg"],
    ["Ponder", "ponder.jpg"],
    ["Rapid Hybridization", "rapid-hybridization.jpg"],
    ["Reality Shift", "reality-shift.jpg"],
    ["Reliquary Tower", "reliquary-tower.jpg"],
    ["Remote Isle", "remote-isle.jpg"],
    ["Resculpt", "resculpt.jpg"],
    ["Sai, Master Thopterist", "sai-master-thopterist.jpg"],
    ["Sapphire Medallion", "sapphire-medallion.jpg"],
    ["Seat of the Synod", "seat-of-the-synod.jpg"],
    ["Sewer-veillance Cam", "sewer-veillance-cam.jpg"],
    ["Sharding Sphinx", "sharding-sphinx.jpg"],
    ["Shimmer Myr", "shimmer-myr.jpg"],
    ["Silver Myr", "silver-myr.jpg"],
    ["Skullclamp", "skullclamp.jpg"],
    ["Sol Ring", "sol-ring.jpg"],
    ["Surgical Skullbomb", "surgical-skullbomb.jpg"],
    ["Tezzeret, Cruel Captain", "tezzeret-cruel-captain.jpg"],
    ["The Eternity Elevator", "the-eternity-elevator.jpg"],
    ["The Golden Throne", "the-golden-throne.jpg"],
    ["Thopter Spy Network", "thopter-spy-network.jpg"],
    ["Thought Monitor", "thought-monitor.jpg"],
    ["Thought Vessel", "thought-vessel.jpg"],
    ["Treasure Vault", "treasure-vault.jpg"],
    ["Ugin, Eye of the Storms", "ugin-eye-of-the-storms.jpg"],
    ["Voltaic Key", "voltaic-key.jpg"],
    ["Welding Jar", "welding-jar.jpg"],
    ["Whir of Invention", "whir-of-invention.jpg"],
    ["Counterspell", "counterspell.jpg"]
  ];

  function pickThree() {
    var pool = CARDS.slice();
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = pool[i];
      pool[i] = pool[j];
      pool[j] = t;
    }
    return pool.slice(0, 3);
  }

  function preload(picks) {
    picks.forEach(function (c) {
      var im = new Image();
      im.src = BASE + c[1];
    });
  }

  function setup(tile) {
    var fans = tile.querySelectorAll(".deck-fan");
    if (fans.length !== 3) return;

    var next = pickThree();
    var open = false;

    function show(picks) {
      for (var i = 0; i < 3; i++) fans[i].src = BASE + picks[i][1];
    }

    function onOpen() {
      if (open) return;
      open = true;
      show(next);
      next = pickThree();
      preload(next);
    }

    function onClose() {
      open = false;
    }

    show(next);
    next = pickThree();
    preload(next);

    tile.addEventListener("mouseenter", onOpen);
    tile.addEventListener("focusin", onOpen);
    tile.addEventListener("mouseleave", onClose);
    tile.addEventListener("focusout", onClose);
  }

  Array.prototype.forEach.call(document.querySelectorAll(".deck-tile"), setup);
})();
