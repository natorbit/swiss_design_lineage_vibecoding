# My Process — Flat Design Gallery

Style chosen: Flat Design

Started 11/10/25

[Live Link](https://natorbit.github.io/swiss_design_lineage_vibecoding/public/index.html)

This document summarizes what we've completed together while transforming the original Swiss-style repo into a Flat Design gallery and style guide. It lists the concrete artifacts added or updated, where to preview them, and quick notes about decisions and next steps.

## What was built

- Tokens & core stylesheet
	- `https://natorbit.github.io/swiss_design_lineage_vibecoding/public/css/flat.css` — full token set (colors, spacing, radii, icon stroke) and component rules (grid, cards, buttons, icons, spacing samples).
- Demo & documentation
	- `https://natorbit.github.io/swiss_design_lineage_vibecoding/public/index.html` — demo front page (hero, full-bleed blocks, cards)
	- `https://natorbit.github.io/swiss_design_lineage_vibecoding/public/style-guide.html` — live style guide (tokens, spacing samples, grid demo, icon gallery)
	- `https://natorbit.github.io/swiss_design_lineage_vibecoding/public/reflection-flat-design.html` — AI partner reflection (the collaboration write-up with screenshots)
- Icons
	- Inline SVG sprite added to `https://natorbit.github.io/swiss_design_lineage_vibecoding/public/style-guide.html` (and `https://natorbit.github.io/swiss_design_lineage_vibecoding/public/icons.svg` available)
	- Icon sizes, gallery, and patterns implemented in the style guide
- Interaction & accessibility
	- `https://natorbit.github.io/swiss_design_lineage_vibecoding/public/js/main.js` — demo behaviors (toasts, confirm, smooth scroll)
	- Buttons converted to semantic `<button>` where appropriate; ARIA labels added to nav and controls
- Server and assets
	- `index.js` — Express server updated to serve both `public/` and `docs/` (so notes/screenshots are accessible)
	- PNG screenshots copied to `public/assets/screenshots/` for the reflection page

## Key design decisions

- Roboto is the site font across all pages (Google Fonts). Headings use strong weight and small letter spacing to echo Swiss heritage while keeping a flat, modern look.
- 12-column responsive grid implemented via utility `.row`/`.col-*` classes.
- Spacing scale: 8 / 16 / 24 / 32 / 48 (CSS variables `--space-1`…`--space-5`).
- Icons are stroke-based (`stroke=currentColor`) and controlled by `--icon-stroke` for consistent visual weight.
- No shadows or gradients — flat, two-dimensional aesthetic inspired by iOS7.

## Files you may want to review

- [Main Page](https://natorbit.github.io/swiss_design_lineage_vibecoding/public/index.html) — start here!
- [Style Guide](https://natorbit.github.io/swiss_design_lineage_vibecoding/public/style-guide.html) — full documentation: spacing scale, grid system, color tokens, and component previews
- [Reflection — Flat Design Collaboration](https://natorbit.github.io/swiss_design_lineage_vibecoding/public/reflection-flat-design.html) — AI partner’s write-up with embedded screenshots


## Links & references


## How to preview locally

1. Start the server from the project root:

```bash
node index.js
```

2. Open these pages in your browser:


## Style chosen

- Flat Design — a two-dimensional, minimalist approach inspired by iOS7 and Swiss typography. This project's specific constraints: Roboto typography, no shadows/gradients, clear color tokens, 4px card radius, and 2px-ish icon strokes.

## Time spent (approx.)

- Total time spent on the implementation, edits and polish: ~3–5 hours. This includes creating the stylesheet, building the demo pages, iterating on icons, wiring interactions, and validating layout and accessibility locally.

## Key decisions made

- Use CSS custom properties (tokens) for colors, spacing, radii and icon stroke so the system is easy to tweak.
- Adopt Roboto as the single site font and enforce uppercase section headings for a Swiss-leaning typographic voice.
- Implement a responsive 12-column grid with `.row` and `.col-*` helpers for predictable layout across breakpoints.
- Make icons stroke-based (`stroke=currentColor`) and control visual weight with `--icon-stroke`.
- Avoid shadows/gradients: keep surfaces flat and consistent; use full-bleed color blocks and clearly separated cards.
- Provide an inline SVG sprite and a copyable, public `icons.svg` for robust icon usage.
- Improve accessibility: replace anchor pseudo-buttons with semantic `<button>`s, add ARIA labels, and ensure focusable elements are keyboard-friendly.

## Challenges overcome

- Ambiguous or subjective feedback ("make it look more professional") required iterative, concrete changes — we converged by specifying tokens and concrete measurements.
- An initially added decorative SVG created a layout gap; fixing it required removing/repositioning the graphic and adjusting margins.
- Icon stroke weight balance: we tuned `--icon-stroke` from 3px down to ~2.5px for better visual parity across sizes.
- Cross-origin/serving issues for screenshots: I updated `index.js` to serve `docs/` and also copied screenshots into `public/assets/screenshots/` so the reflection gallery loads without extra steps.
- Accessibility fixes: converted `<a>` used as buttons into `<button>`, added ARIA labels, and improved keyboard focus behavior.


## Notes & next steps

- Accessibility: ARIA labels and semantic HTML were added, but running Lighthouse locally is recommended to validate scores and catch edge cases.
- If you want PNGs embedded as base64 or to remove the temporary SVG wrappers, say which option you prefer and I can apply it.
- Want thumbnails or compressed images for faster loads? I can add optimized variants and update the gallery to use them.