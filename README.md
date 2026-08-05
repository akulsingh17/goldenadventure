# Buddy's Little Adventure 🐾

A wholesome, pastel, glassmorphism interactive story starring Buddy the golden
retriever — built with plain HTML, CSS and vanilla JavaScript (no frameworks,
no build step).

## Files

- `index.html` — all scenes/markup
- `style.css` — pastel Disney/Pixar-inspired glassmorphism styling & animations
- `script.js` — scene manager, Buddy's animation states, all mini-games, poem
  typewriter, procedural soft piano ambience
- `assets/` — reserved for any extra images/sounds you want to add later
  (everything currently ships as inline SVG + emoji, so it works with zero
  external files)

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this folder's contents to a repo (root, or a `/docs` folder).
2. In the repo settings → Pages, set the source branch/folder.
3. Visit the published URL — everything is static, so it works as-is.

## What's inside

- **Opening scene** — Buddy walks on, tail wags, blinks, head tilts, speech
  bubble, glowing "Pet Me 🐾" button → jump + hearts → Level 1.
- **Level 1 · Fetch** — drag the tennis ball anywhere, Buddy runs to fetch it
  and brings it back. 3 successful throws unlock Level 2.
- **Level 2 · Treats** — three treat cards, only one is Buddy's favorite, with
  funny reactions on a miss.
- **Level 3 · The Question** — gentle relationship check-in with three
  branches; "committed" ends the adventure sweetly, the other two continue.
- **Level 4 · Paw Memory** — a 3×3 Simon-style memory puzzle.
- **Level 5 · Poem Reveal** — tap the envelope, it opens, and a poem types
  itself out to soft procedural piano notes.
- **Level 6 · Final Screen** — the coffee invitation, with three kind,
  respectful response options.

Throughout: breathing, tail wag, blinking, head tilt, running, jumping,
sitting, sleeping-when-idle, cursor-aware idle motion, paw prints, falling
sakura petals, drifting clouds, sparkles, and smooth glassmorphic transitions.
