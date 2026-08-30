# SiF8 — Premium Dark Landing Page

A single-page, dark-mode landing page for SiF8, built exactly to the supplied brand system and section order.

## Design system

- Background: deep void `#08050f`, with ambient radial glows (purple → royal blue → cyan) placed behind the hero, the "Why Choose Us" orb, and the bridge section.
- Accent tokens: Deep Purple `#231342`, Royal Blue `#3125AD`, Sky Cyan `#4CB7E4`, Violet `#9550B3`, Bright Cyan `#0EFFFF`.
- Type: Garamond (EB Garamond via Google Fonts link in the root head) for display headlines; DM Sans for body, subheads, labels.
- Surfaces: minimal glassmorphism — low-opacity fills, `backdrop-blur`, 1px `rgba(255,255,255,0.1)` borders, soft radius.
- All values live as semantic tokens in `src/styles.css` (oklch), no hardcoded color utilities in components.

## Sections (exact order)

1. **Navbar** — fixed, glass on scroll. "SiF8" wordmark, links: About, Services, Case Studies, Process, Testimonials, plus a "Free Evaluation" button (cyan-edged glass). Mobile: slide-down sheet menu.
2. **Hero** — eyebrow, Garamond headline, subheadline, primary CTA "Apply for Basirah Brand Audit →", trust signal "✦ Trusted by 20+ brands". Copy exactly as supplied.
3. **The Reality (Problem)** — large spanning headline, 2-column editorial grid beneath, 1px vertical divider between columns, body `line-height: 1.8`, generous whitespace. Columns stack on mobile (divider becomes horizontal).
4. **Who This Is For** — headline plus numbered list 01–05 with hairline row separators and monospaced-feel numerals; closing "Not For" block in a muted, bordered panel.
5. **Why Choose Us** — 6-card CSS grid (3×2 desktop, 1 column mobile) around a central circular glowing orb component (isolated as `CenterOrb`, placeholder "SiF8" text/mark swappable in one spot, with the breathing/pumping animation already working) curved glowing SVG connectors from the orb to each card, drawn in an absolutely positioned overlay SVG that is hidden below `lg` (cards stack there).
6. **The Bridge** — centered "Business and deen were never separate" with an animated neon EKG heartbeat SVG line connecting the two words, drawn using `stroke-dasharray`/`stroke-dashoffset` with a glow filter.

Footer: minimal single line with the wordmark and the CTA repeated.

## Motion

- Section reveals: subtle fade + 12px rise on scroll (IntersectionObserver, one-shot).
- Orb: 4s breathing scale + glow pulse; connector strokes have a slow travelling dash shimmer.
- Heartbeat: dash draw-in on view, then looping pulse.
- All animation respects `prefers-reduced-motion`.

## Technical notes

- Rewrite `src/routes/index.tsx` as the landing page; section components under `src/components/landing/`.
- Fonts loaded via `<link>` in `src/routes/__root.tsx` head (never `@import` a URL in CSS).
- Route-level `head()` on `/` with SiF8-specific title, description, og/twitter tags.
- Semantic HTML, single H1, anchor-scroll targets for nav links (this is one page — nav links scroll to sections).
- No backend needed; CTA buttons are anchors for now.

## Suggested improvements (optional, say if you want them)

- **Grain + vignette overlay** over the whole page — a faint noise texture keeps large dark fields from banding and reads expensive.
- **Cursor-reactive glow** in the hero: the radial glow follows the pointer at low intensity (desktop only).
- **Kinetic headline**: hero headline words fade up in sequence with slight letterspacing settle, instead of a single block fade.
- **Arabic-calligraphy-inspired divider** motifs between sections instead of plain rules — ties the deen thread into the visual language without being literal.
- **Case Studies / Testimonials / Process sections** — the navbar links to them but the spec has no content for them; either add real sections later or trim those links.
- **Working "Free Evaluation" form** backed by Lovable Cloud so applications are captured rather than being a dead link.
