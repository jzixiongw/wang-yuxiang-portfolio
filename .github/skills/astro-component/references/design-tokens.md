# Design Token Reference

All CSS custom properties defined in `src/styles/global.css`.

## Colour Tokens

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--color-bg` | `#fafafa` | `#0a0a0a` | Page background |
| `--color-surface` | `#ffffff` | `#141414` | Cards, panels |
| `--color-text` | `#1a1a1a` | `#e5e5e5` | Body text, headings |
| `--color-text-secondary` | `#666666` | `#999999` | Captions, labels |
| `--color-border` | `#e5e5e5` | `#2a2a2a` | Dividers, outlines |
| `--color-hover` | `#f0f0f0` | `#1e1e1e` | Hover backgrounds |

## Spacing Tokens

Base unit: `--spacing-unit: 8px`

| Expression | Value | Usage |
|---|---|---|
| `calc(var(--spacing-unit) * 0.5)` | 4px | Tight gaps |
| `var(--spacing-unit)` | 8px | Small padding |
| `calc(var(--spacing-unit) * 2)` | 16px | Component padding |
| `calc(var(--spacing-unit) * 3)` | 24px | Section gaps |
| `calc(var(--spacing-unit) * 4)` | 32px | Large gaps |
| `calc(var(--spacing-unit) * 6)` | 48px | Section margins |

## Typography Tokens

| Token | Value |
|---|---|
| `--font-sans` | System font stack with CJK fallbacks |

## Layout Tokens

| Token | Value | Usage |
|---|---|---|
| `--max-width` | `960px` | Content column max width |
