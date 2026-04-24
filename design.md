# Design System — Wang Yuxiang Portfolio

All tokens live in `src/styles/global.css` as CSS custom properties.
To retheme the site, edit the values in `:root` (light) and `[data-theme='dark']` (dark).

---

## 1. Colour Tokens

| Token | Light | Dark | Role |
|---|---|---|---|
| `--color-bg` | `#fafafa` | `#0a0a0a` | Page background |
| `--color-surface` | `#ffffff` | `#141414` | Cards, panels, elevated surfaces |
| `--color-text` | `#1a1a1a` | `#e5e5e5` | Primary body text |
| `--color-text-secondary` | `#666666` | `#999999` | Captions, labels, secondary info |
| `--color-border` | `#e5e5e5` | `#2a2a2a` | Dividers, card outlines |
| `--color-hover` | `#f0f0f0` | `#1e1e1e` | Hover background states |
| `--color-accent` | `#22d3ee` | `#67e8f9` | Active highlights, animated lines, overlay glows |
| `--color-accent-muted` | `rgba(34,211,238,0.08)` | `rgba(103,232,249,0.08)` | Soft tinted backgrounds |
| `--color-accent-border` | `rgba(34,211,238,0.35)` | `rgba(103,232,249,0.25)` | Glowing card borders on hover |

### Accent hue guide
The current accent is **technical cyan** (`#22d3ee`).
To switch to a different palette, change only `--color-accent` (and its dark-mode
counterpart). The muted and border variants are derived from it — update them to
match the new hue's RGB values.

| Aesthetic | Light accent | Dark accent |
|---|---|---|
| Cyan / tech (default) | `#22d3ee` | `#67e8f9` |
| Electric blue | `#3b82f6` | `#93c5fd` |
| Warm amber | `#f59e0b` | `#fcd34d` |
| Emerald | `#10b981` | `#6ee7b7` |

---

## 2. Typography Tokens

| Token | Value | Use |
|---|---|---|
| `--font-display` | `'Space Grotesk', system-ui, …` | Headings, hero name, nav logo, section titles, card titles |
| `--font-sans` | System font stack with CJK fallbacks | Body copy, captions, UI chrome |

`Space Grotesk` is loaded from Google Fonts (see `src/layouts/Layout.astro`).
It covers Latin characters; CJK glyphs fall back automatically to PingFang SC / Hiragino.

### Typographic scale in use

| Element | `font-size` | `font-weight` | Notes |
|---|---|---|---|
| Hero name | `3rem` (desktop), `1.875rem` (mobile) | `700` | `--font-display`, negative tracking |
| Section heading | `0.75rem` | `600` | Uppercase, wide tracking (`0.14em`) |
| Nav logo | `0.875rem` | `600` | Uppercase, `0.12em` tracking |
| Card title | `0.9375rem` | `500` | `--font-display` |
| Body / intro | `1.05rem` | `400` | `--font-sans`, `line-height: 1.8` |
| Secondary / captions | `0.875rem` | `400` | `--color-text-secondary` |

---

## 3. Spacing Tokens

| Token | Value | Purpose |
|---|---|---|
| `--spacing-unit` | `8px` | Base spacer; always multiply, never modify directly |

### Spacing scale

| Expression | px | Common use |
|---|---|---|
| `* 0.5` | 4 px | Tight chip padding |
| `* 1` | 8 px | Small element padding |
| `* 1.5` | 12 px | Heading bottom padding |
| `* 2` | 16 px | Component internal padding |
| `* 2.5` | 20 px | Card info horizontal padding |
| `* 3` | 24 px | Gaps between related items, section headings |
| `* 4` | 32 px | Grid gap |
| `* 6` | 48 px | Section margins |
| `* 8` | 64 px | Hero top/bottom padding |
| `* 10` | 80 px | Page-bottom breathing room |

---

## 4. Layout Tokens

| Token | Value | Use |
|---|---|---|
| `--max-width` | `1200px` | Maximum content column width |
| `--header-height` | `56px` | Sticky header height; used by hero min-height calc |
| `--color-header-bg` | `rgba(250,250,250,0.88)` / `rgba(10,10,10,0.88)` | Frosted-glass header surface |

- Mobile breakpoint: `640px` (`@media (max-width: 640px)`)
- Container padding: `calc(var(--spacing-unit) * 2)` (16 px) on each side
- Hero is **full-bleed** (direct child of `<main>`, no container). Inner content is constrained by `.container.hero__inner`.
- Project sections on the home page are wrapped in `.container.projects-root`.

---

## 5. Shape & Elevation Tokens

### Border radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `4px` | Tags, small chips |
| `--radius-md` | `8px` | Cards, video embeds |
| `--radius-lg` | `16px` | Large panels (reserved) |

### Shadows

| Token | Light value | Dark value | Use |
|---|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,.05)` | `0 1px 3px rgba(0,0,0,.2)` | Resting card |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,.07)` | `0 4px 16px rgba(0,0,0,.3)` | General lift |
| `--shadow-hover` | `0 12px 40px rgba(0,0,0,.10)` | `0 12px 40px rgba(0,0,0,.5)` | Card hovered |

---

## 6. Motion & Animation Tokens

### Timing

| Token | Value | Use |
|---|---|---|
| `--transition-fast` | `0.15s ease` | Icon swaps, border flickers |
| `--transition-base` | `0.25s ease` | Typical hover state transitions |
| `--transition-slow` | `0.4s ease` | Card entrance opacity, image scale |

### Named keyframes (defined in `global.css`)

| Name | From → To | Use |
|---|---|---|
| `fade-up` | `opacity:0, translateY(16px)` → `opacity:1, translateY(0)` | Hero text entrance, section headings |
| `fade-in` | `opacity:0` → `opacity:1` | Sections, overlays |
| `line-grow` | `width:0` → `width:2.5rem` | Accent line under section headings |

### Entrance timing choreography (index page)

| Element | Delay | Duration |
|---|---|---|
| Site header | 0 s | 0.5 s |
| Hero name | 0.1 s | 0.7 s |
| Hero school | 0.2 s | 0.7 s |
| Hero intro | 0.3 s | 0.7 s |
| Hero résumé tags | 0.4 s | 0.7 s |
| Section heading | 0.5 s | 0.6 s |
| Section heading accent line | 0.8 s | 0.4 s |
| Project cards | IO-triggered, staggered 60 ms per card | 0.4 s |

All animations respect `@media (prefers-reduced-motion: reduce)` — durations are
collapsed to `0.01ms` for users with motion sensitivity.

---

## 7. Particle Effect

Particle nodes are rendered on a `<canvas>` element (`#hero-particles`) inside the
hero section, positioned absolutely to fill the section without affecting layout.

- Count: 55 nodes
- Connection threshold: 130 px
- Node colour: `rgba(34, 211, 238, 0.5)` (accent cyan)
- Line colour: `rgba(34, 211, 238, 0 – 0.2)` (fades with distance)
- Canvas opacity via CSS: `0.18` (light mode) / `0.65` (dark mode)

To disable particles entirely: set `.hero__particles { display: none; }` in a
project-specific override.
To change particle colour: update the hex strings in the `<script is:inline>` block
in `src/pages/index.astro`.

---

## 8. Component Hover Behaviour

| Component | Hover effect |
|---|---|
| Nav logo | Cyan underline slides in from left |
| Toggle buttons | Border lightens to `--color-text-secondary` |
| Project card | Lifts (`translateY(-5px)`), shadow deepens, border glows with `--color-accent-border`, image scales to 104% |
| Card overlay | Gradient fade-in from bottom over image |
| Back link | Text colour transitions to `--color-text` |
