# The Foundation Process — Alternating Timeline Accordions

A new dedicated Process section, placed after The Bridge. The existing "Why Choose Us" section keeps its `#process` anchor; the navbar "Process" link already points to a real section, but this new timeline becomes the canonical, expanded Foundation Process experience at `#foundation`.

## Layout

A vertical timeline with a central illuminated line (purple → royal blue → cyan gradient) that fills progressively as the section scrolls into view, plus four glowing numbered nodes: 01, 02, 03, 04.

```text
        01  ── text ──|●|── visual ──
        ── visual ──|●|── text ──  02
        03  ── text ──|●|── visual ──
        ── visual ──|●|── text ──  04
```

- Alternating sides on desktop: 01 text-left/visual-right, 02 visual-left/text-right, and so on.
- Mobile: line shifts to the far left, all content stacks in one column under each node, visuals shown compact above the accordion.

## Text side (interactive accordion)

Each stage shows its number, title, and parenthetical subtitle always visible. Clicking the header expands a panel revealing:

- **Intent** — the paragraph, in relaxed editorial line-height.
- **Deliverables** — chips/tags in a soft glass pill grid, each with a hairline border and cyan hover.
- **Feedback Loop** — a horizontal chain of steps separated by small arrow glyphs, in muted small caps.

Behavior: only one stage open at a time (stage 01 open by default), smooth height animation, full keyboard access and correct ARIA (button + region), and the active stage's node brightens.

All four stages use the exact supplied copy for Intent, Deliverables, and Feedback Loop.

## Visual side (floating abstract UI)

Each stage gets its own abstract composition of layered glass shards — small cards, hairline grids, orbiting dots, a gradient blur — each fragment drifting up and down on its own slow loop with staggered delays so nothing moves in lockstep. Per-stage motifs:

1. Clarity: concentric rings converging on a point.
2. Identity: stacked swatch/typography cards fanned out.
3. Barakah system: a node graph of connected pills.
4. Expansion: tiles radiating outward from a center.

Compositions dim and desaturate when their stage is collapsed, and brighten when it is active.

## Motion

- Timeline line draws in on scroll; nodes pop with a glow ring pulse as they enter view.
- Accordion expand/collapse with an eased height + fade.
- Floating fragments on 6–10s alternating drift loops.
- Everything disabled under `prefers-reduced-motion`.

## Technical notes

- New files: `src/components/landing/Process.tsx` (section + timeline), `src/components/landing/ProcessStage.tsx` (one row: node, accordion, visual), `src/components/landing/ProcessVisual.tsx` (the four abstract compositions), and `src/lib/process-data.ts` holding the stage copy so text edits stay in one place.
- Rendered from `src/routes/index.tsx` between `<WhyUs />` and `<Bridge />`.
- `WhyUs` section id changes from `process` to `why-us`; new section takes `id="process"`.
- Reuses the existing `Reveal` component and `glass` utility; adds keyframes for float drift and node pulse to `src/styles.css` as tokens/utilities — no hardcoded color classes.
