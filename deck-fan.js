(function () {
  var BASE = "cards/deck/";
  var DECKS = {
    urza: [
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
    ],
    jin: [
      ["An Offer You Can't Refuse", "an-offer-you-can-t-refuse.jpg"],
      ["Anguished Unmaking", "anguished-unmaking.jpg"],
      ["Arcane Denial", "arcane-denial.jpg"],
      ["Arcane Sanctum", "arcane-sanctum.jpg"],
      ["Arcane Signet", "arcane-signet.jpg"],
      ["Archpriest of Shadows", "archpriest-of-shadows.jpg"],
      ["Ardenn, Intrepid Archaeologist", "ardenn-intrepid-archaeologist.jpg"],
      ["Azorius Signet", "azorius-signet.jpg"],
      ["Baleful Strix", "baleful-strix.jpg"],
      ["Bident of Thassa", "bident-of-thassa.jpg"],
      ["Black Market Connections", "black-market-connections.jpg"],
      ["Blackblade Reforged", "blackblade-reforged.jpg"],
      ["Bojuka Bog", "bojuka-bog.jpg"],
      ["Command Tower", "command-tower.jpg"],
      ["Conqueror's Flail", "conqueror-s-flail.jpg"],
      ["Counterspell", "counterspell.jpg"],
      ["Damn", "damn.jpg"],
      ["Danitha Capashen, Paragon", "danitha-capashen-paragon.jpg"],
      ["Dark Ritual", "dark-ritual.jpg"],
      ["Dimir Signet", "dimir-signet.jpg"],
      ["Drana, Liberator of Malakir", "drana-liberator-of-malakir.jpg"],
      ["Drowned Catacomb", "drowned-catacomb.jpg"],
      ["Enduring Curiosity", "enduring-curiosity.jpg"],
      ["Exotic Orchard", "exotic-orchard.jpg"],
      ["Fallen Shinobi", "fallen-shinobi.jpg"],
      ["Fellwar Stone", "fellwar-stone.jpg"],
      ["Forge Anew", "forge-anew.jpg"],
      ["Genji Glove", "genji-glove.jpg"],
      ["Ghostly Prison", "ghostly-prison.jpg"],
      ["Glacial Fortress", "glacial-fortress.jpg"],
      ["Grim Hireling", "grim-hireling.jpg"],
      ["Isolated Chapel", "isolated-chapel.jpg"],
      ["Kamiz, Obscura Oculus", "kamiz-obscura-oculus.jpg"],
      ["Lightning Greaves", "lightning-greaves.jpg"],
      ["Malcolm, Alluring Scoundrel", "malcolm-alluring-scoundrel.jpg"],
      ["Mistblade Shinobi", "mistblade-shinobi.jpg"],
      ["Nashi, Moon Sage's Scion", "nashi-moon-sage-s-scion.jpg"],
      ["Negate", "negate.jpg"],
      ["Open the Armory", "open-the-armory.jpg"],
      ["Orzhov Signet", "orzhov-signet.jpg"],
      ["Path of Ancestry", "path-of-ancestry.jpg"],
      ["Path to Exile", "path-to-exile.jpg"],
      ["Propaganda", "propaganda.jpg"],
      ["Prosperous Thief", "prosperous-thief.jpg"],
      ["Puresteel Paladin", "puresteel-paladin.jpg"],
      ["Reanimate", "reanimate.jpg"],
      ["Reliquary Tower", "reliquary-tower.jpg"],
      ["Rogue's Passage", "rogue-s-passage.jpg"],
      ["Selfless Samurai", "selfless-samurai.jpg"],
      ["Shadowmage Infiltrator", "shadowmage-infiltrator.jpg"],
      ["Silent Hallcreeper", "silent-hallcreeper.jpg"],
      ["Sol Ring", "sol-ring.jpg"],
      ["Squall, SeeD Mercenary", "squall-seed-mercenary.jpg"],
      ["Steel of the Godhead", "steel-of-the-godhead.jpg"],
      ["Summon: Primal Odin", "summon-primal-odin.jpg"],
      ["Super-Soldier Serum", "super-soldier-serum.jpg"],
      ["Supreme Verdict", "supreme-verdict.jpg"],
      ["Swiftfoot Boots", "swiftfoot-boots.jpg"],
      ["Swords to Plowshares", "swords-to-plowshares.jpg"],
      ["Talisman of Dominance", "talisman-of-dominance.jpg"],
      ["Talisman of Hierarchy", "talisman-of-hierarchy.jpg"],
      ["Talisman of Progress", "talisman-of-progress.jpg"],
      ["The Key to the Vault", "the-key-to-the-vault.jpg"],
      ["Thought Vessel", "thought-vessel.jpg"],
      ["Toxic Deluge", "toxic-deluge.jpg"],
      ["Unstoppable Slasher", "unstoppable-slasher.jpg"],
      ["Void Rend", "void-rend.jpg"],
      ["Vorpal Sword", "vorpal-sword.jpg"],
      ["Yuriko, the Tiger's Shadow", "yuriko-the-tiger-s-shadow.jpg"]
    ]
  };

  function pickThree(cards) {
    var pool = cards.slice();
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
    var cards = DECKS[tile.getAttribute("data-deck")];
    var fans = tile.querySelectorAll(".deck-fan");
    if (!cards || fans.length !== 3) return;

    var next = pickThree(cards);
    var open = false;

    function show(picks) {
      for (var i = 0; i < 3; i++) fans[i].src = BASE + picks[i][1];
    }

    function onOpen() {
      if (open) return;
      open = true;
      show(next);
      next = pickThree(cards);
      preload(next);
    }

    function onClose() {
      open = false;
    }

    show(next);
    next = pickThree(cards);
    preload(next);

    tile.addEventListener("mouseenter", onOpen);
    tile.addEventListener("focusin", onOpen);
    tile.addEventListener("mouseleave", onClose);
    tile.addEventListener("focusout", onClose);
  }

  Array.prototype.forEach.call(document.querySelectorAll(".deck-tile"), setup);
})();
