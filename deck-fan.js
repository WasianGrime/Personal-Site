(function () {
  var BASE = "cards/deck/";
  var DECKS = {
    eluge: [
      ["Aetherize", "aetherize.jpg"],
      ["Aetherspouts", "aetherspouts.jpg"],
      ["Aqueous Form", "aqueous-form.jpg"],
      ["Arcane Signet", "arcane-signet.jpg"],
      ["Archmage of Runes", "archmage-of-runes.jpg"],
      ["Archmage's Charm", "archmage-s-charm.jpg"],
      ["Blue Sun's Twilight", "blue-sun-s-twilight.jpg"],
      ["Blur", "blur.jpg"],
      ["Brainsurge", "brainsurge.jpg"],
      ["Castle Vantress", "castle-vantress.jpg"],
      ["Chasm Skulker", "chasm-skulker.jpg"],
      ["Consider", "consider.jpg"],
      ["Counterspell", "counterspell.jpg"],
      ["Cryptic Command", "cryptic-command.jpg"],
      ["Curse of the Swine", "curse-of-the-swine.jpg"],
      ["Dig Through Time", "dig-through-time.jpg"],
      ["Displace", "displace.jpg"],
      ["Displacer Kitten", "displacer-kitten.jpg"],
      ["Engulf the Shore", "engulf-the-shore.jpg"],
      ["Enter the Enigma", "enter-the-enigma.jpg"],
      ["Essence Flux", "essence-flux.jpg"],
      ["Evacuation", "evacuation.jpg"],
      ["Flow of Knowledge", "flow-of-knowledge.jpg"],
      ["Frantic Search", "frantic-search.jpg"],
      ["Ghostly Flicker", "ghostly-flicker.jpg"],
      ["Harbinger of the Seas", "harbinger-of-the-seas.jpg"],
      ["Haughty Djinn", "haughty-djinn.jpg"],
      ["High Tide", "high-tide.jpg"],
      ["Hullbreaker Horror", "hullbreaker-horror.jpg"],
      ["Jin-Gitaxias, Progress Tyrant", "jin-gitaxias-progress-tyrant.jpg"],
      ["Lonely Sandbar", "lonely-sandbar.jpg"],
      ["Long River's Pull", "long-river-s-pull.jpg"],
      ["Mind Stone", "mind-stone.jpg"],
      ["Murmuring Mystic", "murmuring-mystic.jpg"],
      ["Mystic Confluence", "mystic-confluence.jpg"],
      ["Mystic Sanctuary", "mystic-sanctuary.jpg"],
      ["Negate", "negate.jpg"],
      ["Ojer Pakpatiq, Deepest Epoch // Temple of Cyclical Time", "ojer-pakpatiq-deepest-epoch-temple-of-cyclical-time.jpg"],
      ["Opt", "opt.jpg"],
      ["Planar Incision", "planar-incision.jpg"],
      ["Pongify", "pongify.jpg"],
      ["Pull from Tomorrow", "pull-from-tomorrow.jpg"],
      ["Quick Study", "quick-study.jpg"],
      ["Reality Shift", "reality-shift.jpg"],
      ["Refute", "refute.jpg"],
      ["Reliquary Tower", "reliquary-tower.jpg"],
      ["Rewind", "rewind.jpg"],
      ["Rivendell", "rivendell.jpg"],
      ["Rogue's Passage", "rogue-s-passage.jpg"],
      ["Sapphire Medallion", "sapphire-medallion.jpg"],
      ["Season of Weaving", "season-of-weaving.jpg"],
      ["Shark Typhoon", "shark-typhoon.jpg"],
      ["Siren's Ruse", "siren-s-ruse.jpg"],
      ["Sky Diamond", "sky-diamond.jpg"],
      ["Snap", "snap.jpg"],
      ["Sol Ring", "sol-ring.jpg"],
      ["Solemn Simulacrum", "solemn-simulacrum.jpg"],
      ["Splash Portal", "splash-portal.jpg"],
      ["Sublime Epiphany", "sublime-epiphany.jpg"],
      ["Sunken Palace", "sunken-palace.jpg"],
      ["Swiftfoot Boots", "swiftfoot-boots.jpg"],
      ["Talrand, Sky Summoner", "talrand-sky-summoner.jpg"],
      ["Teferi's Time Twist", "teferi-s-time-twist.jpg"],
      ["Thassa, Deep-Dwelling", "thassa-deep-dwelling.jpg"],
      ["The Flood of Mars", "the-flood-of-mars.jpg"],
      ["Thought Vessel", "thought-vessel.jpg"],
      ["Unwind", "unwind.jpg"],
      ["Wavebreak Hippocamp", "wavebreak-hippocamp.jpg"],
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
