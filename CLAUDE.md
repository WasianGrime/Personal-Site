# CLAUDE.md

Ty Grimes's personal site: a static, single-page site with no build step, framework or package manager.

## Structure

- `index.html` — the whole site. Each tab is a `<section class="view" data-view="...">` (`ty`, `projects`, `hobbies`, `about`, `photos`); all but one are `hidden`.
- `style.css` — all styles. Design tokens (colors, status pills) live on `:root` at the top; reuse them instead of hard-coding colors. The site is light-only (`color-scheme: light`).
- `nav.js` — tab switching, the sliding tab indicator, hash routing and per-view `document.title` (see `TITLES`). A new view needs a nav link with `data-target`, a matching section and a `TITLES` entry.
- `drop-in.js` — exposes `window.applyDropIn(view)`, the randomized drop-in animation for `.rail` and `.grid-2` children. Keep it transform-only so tiles can never end up invisible.
- `deck-fan.js` — the Magic: The Gathering deck tiles. `DECKS` maps a tile's `data-deck` to `[card name, filename]` pairs; images live in `cards/deck/`.
- `yt-sub.js` — the animated Subscribe button on the YouTube phone tile.
- Images (`*.jpg`) and `Ty-Grimes-Resume.pdf` sit at the repo root.

## Conventions

- Plain ES5-style JavaScript in IIFEs (`var`, `function`, `Array.prototype.forEach.call`), loaded with `defer`. No modules, no dependencies.
- Respect `prefers-reduced-motion` for any new animation.
- Fonts come from Google Fonts: Fraunces (headings), Archivo (body), IM Fell English, IBM Plex Mono.
- Test layout changes at phone width and in Safari (grid items with `aspect-ratio` need `justify-self: stretch`).
- Compress new photos before adding them; keep filenames lowercase-kebab-case.

## Commits

Short, sentence-case, imperative messages describing the visible change, e.g. "Add two more photos to the gallery with camera captions". Work on `main` unless asked otherwise.

## Previewing

Open `index.html` directly, or run `python3 -m http.server` in the repo root and visit http://localhost:8000.
