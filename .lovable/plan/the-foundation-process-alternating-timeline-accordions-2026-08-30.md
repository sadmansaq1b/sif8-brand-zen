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

## Visual side (glowing mock-UI panels, reference-matched)

Following the supplied reference: each stage's visual is a large rounded panel (near-black fill, hairline border, generous inner padding) with a strong blue-violet glow blooming from behind and pooling at the bottom edge — the glow is the light source, the panel is the stage. Inside sit small faux-UI fragments rendered as real DOM: rounded chips, tiny labels in uppercase micro-type, miniature bars, sliders, swatch rows, dotted grids. Fragments are tilted slightly, layered with soft drop shadows, and drift up and down on individual slow loops with staggered delays.

Per-stage compositions:

1. Clarity: a short chat/diagnostic exchange — alternating question and answer bubbles with small avatar dots.
2. Identity: fanned, tilted cards labelled COLOR PALETTE, TYPE SCALE, LOGO MARK, MOTION — swatch rows and letterform samples inside, brightest card centered.
3. Barakah system: a stacked "voice guide" panel with connected pills and a document-line preview beside a small channel list.
4. Expansion: a spread of module tiles (packaging, retail, web, campaign) radiating from a center card, with a cursor-and-badge detail like the reference's delivery frame.

Panel glow tint shifts per stage across the brand ramp (violet → royal blue → sky cyan). Compositions dim and desaturate when their stage is collapsed, and brighten when it is active.


## Motion

- Timeline line draws in on scroll; nodes pop with a glow ring pulse as they enter view.
- Accordion expand/collapse with an eased height + fade.
- Floating fragments on 6–10s alternating drift loops.
- Everything disabled under `prefers-reduced-motion`.

## Technical notes

- New files: `src/components/landing/Process.tsx` (section + timeline), `src/components/landing/ProcessStage.tsx` (one row: node, accordion, visual), `src/components/landing/ProcessVisual.tsx` (the four abstract compositions), and `src/lib/process-data.ts` holding the stage copy so text edits stay in one place.
- Rendered from `src/routes/index.tsx` after `<Bridge />`.
- New section takes `id="foundation"` and uses `aria-labelledby` for the heading.
- Reuses the existing `Reveal` component and `glass` utility; adds keyframes for float drift and node pulse to `src/styles.css` as tokens/utilities — no hardcoded color classes.
