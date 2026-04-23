---
name: design-tokens
description: 'Extend or audit the CSS design token system in this Astro portfolio. Use when adding new colour tokens, adjusting the spacing scale, changing typography, ensuring dark mode coverage, or auditing components for hardcoded values. Covers CSS custom properties in global.css, the 8px spacing unit, the colour palette, and the system font stack.'
argument-hint: 'what to change (e.g. "add a brand accent colour", "audit all components for hardcoded colours", "add a border-radius token")'
---

# Design Token System

## Token Philosophy

All visual constants live as CSS custom properties in `src/styles/global.css`.  
Components **must not** hardcode hex values, `px` spacing, or font names.  
This ensures dark mode and future theme changes require only one file edit.

## Current Token Inventory

### Colour Tokens

```css
:root {
  /* Backgrounds */
  --color-bg: #fafafa;           /* page background */
  --color-surface: #ffffff;      /* cards, panels, elevated surfaces */

  /* Text */
  --color-text: #1a1a1a;         /* primary body text, headings */
  --color-text-secondary: #666666; /* captions, labels, secondary info */

  /* UI Chrome */
  --color-border: #e5e5e5;       /* dividers, card outlines */
  --color-hover: #f0f0f0;        /* hover state backgrounds */
}

[data-theme='dark'] {
  --color-bg: #0a0a0a;
  --color-surface: #141414;
  --color-text: #e5e5e5;
  --color-text-secondary: #999999;
  --color-border: #2a2a2a;
  --color-hover: #1e1e1e;
}
```

### Spacing Tokens

```css
:root {
  --spacing-unit: 8px;
}
```

**Usage**: `calc(var(--spacing-unit) * N)` where N is a scale factor.

| Scale | Value | Typical use |
|---|---|---|
| `* 0.5` | 4px | Inner icon gaps, tight chips |
| `* 1` | 8px | Small element padding |
| `* 2` | 16px | Component internal padding |
| `* 3` | 24px | Gap between related items, section headings |
| `* 4` | 32px | Card-to-card gap |
| `* 6` | 48px | Section top/bottom margin |
| `* 8` | 64px | Large whitespace between sections |

### Layout Tokens

```css
:root {
  --max-width: 960px;   /* max content column width */
}
```

### Typography Tokens

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Noto Sans CJK SC', 'Hiragino Sans GB', sans-serif;
}
```

The font stack prioritises system fonts and includes CJK (Chinese) fallbacks.

## Adding a New Token

### Step 1 — Name the token

Follow the naming pattern: `--category-variant`

- Colour: `--color-accent`, `--color-danger`, `--color-success`
- Spacing: prefer the scale system; only add a named token for a fixed semantic size
- Font: `--font-mono`, `--font-display`
- Radius: `--radius-sm`, `--radius-md`

### Step 2 — Declare in `:root` and `[data-theme='dark']`

```css
/* src/styles/global.css */
:root {
  /* … existing … */
  --color-accent: #0070f3;
  --radius-md: 6px;
}

[data-theme='dark'] {
  /* … existing … */
  --color-accent: #3b9eff;
  /* --radius-md has no dark variant — omit if value is the same */
}
```

Tokens that don't change between themes (spacing, radii, fonts) only need a `:root` declaration.

### Step 3 — Use in components

```css
.cta-button {
  background: var(--color-accent);
  border-radius: var(--radius-md);
  padding: calc(var(--spacing-unit) * 1.5) calc(var(--spacing-unit) * 3);
  font-family: var(--font-sans);
  color: var(--color-surface); /* inverse text on accent bg */
}
```

## Auditing for Hardcoded Values

Search for hardcoded values that should be tokens:

```bash
# Find hardcoded hex colours in component files
grep -rn '#[0-9a-fA-F]\{3,6\}' src/components/ src/pages/
grep -rn '#[0-9a-fA-F]\{3,6\}' src/styles/
```

Replace any hardcoded value with the appropriate `var(--*)` token.  
If no matching token exists, add one to `global.css` first.

## Checklist

- [ ] New tokens declared in both `:root` and `[data-theme='dark']` (if colour-related)
- [ ] Token name follows `--category-variant` convention
- [ ] No hardcoded hex, raw `px` spacing, or inline font names in component `<style>` blocks
- [ ] Font stack includes CJK fallback fonts

## Token Usage Quick Reference

| Need | Token |
|---|---|
| Page background | `var(--color-bg)` |
| Card/panel background | `var(--color-surface)` |
| Body text | `var(--color-text)` |
| Muted/secondary text | `var(--color-text-secondary)` |
| Borders/dividers | `var(--color-border)` |
| Hover background | `var(--color-hover)` |
| Standard spacing | `calc(var(--spacing-unit) * N)` |
| Max content width | `var(--max-width)` |
| Fonts | `var(--font-sans)` |
