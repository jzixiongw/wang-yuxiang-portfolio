---
name: dark-mode-theming
description: 'Implement or extend dark mode in this Astro portfolio. Use when adding dark/light theme support, fixing flash of unstyled content (FOUC) on page load, adding new colour tokens, or debugging theme persistence. Covers CSS custom property overrides, localStorage, data-theme attribute, and the inline anti-FOUC script pattern.'
argument-hint: 'what you want to do (e.g. "add new background token", "fix FOUC on refresh", "add a third theme")'
---

# Dark Mode & Theming

## How It Works in This Project

```
User click → DarkModeToggle.astro script
  → sets data-theme="dark" on <html>
  → saves "dark" to localStorage
  → CSS [data-theme="dark"] overrides take effect immediately

On next page load:
  inline <script is:inline> in Layout.astro
  → reads localStorage before first paint
  → sets data-theme BEFORE styles render → no FOUC
```

Key files:
- Theme variables: [`src/styles/global.css`](../../../src/styles/global.css) — `:root {}` and `[data-theme='dark'] {}`
- Anti-FOUC script: [`src/layouts/Layout.astro`](../../../src/layouts/Layout.astro) — inline `<script>` in `<head>`
- Toggle component: [`src/components/DarkModeToggle.astro`](../../../src/components/DarkModeToggle.astro)

## Adding a New Colour Token

### Step 1 — Declare in `:root` (light value)

```css
/* src/styles/global.css */
:root {
  /* existing tokens … */
  --color-accent: #0070f3;
}
```

### Step 2 — Override in `[data-theme='dark']`

```css
[data-theme='dark'] {
  /* existing overrides … */
  --color-accent: #3b9eff;
}
```

### Step 3 — Use the token in components

```css
.my-element {
  color: var(--color-accent);
  /* NEVER: color: #0070f3; */
}
```

## Anti-FOUC Pattern (Do Not Remove)

The inline script in `Layout.astro` **must** remain in `<head>`, before `<link>` or `<style>` tags that reference the CSS variables:

```html
<script is:inline>
  (function () {
    const theme = localStorage.getItem('theme');
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    var lang = localStorage.getItem('lang') || 'cn';
    document.documentElement.setAttribute('data-lang', lang);
  })();
</script>
```

Rules:
- Use `is:inline` so Astro does not bundle/defer it.
- IIFE pattern prevents global variable pollution.
- Always read `prefers-color-scheme` as fallback when no localStorage value exists.
- Do not `await` anything — must be synchronous.

## Extending the Toggle Component

If you need to rename icons or add a third mode, edit `src/components/DarkModeToggle.astro`.  
The `updateIcon()` helper should always read the **current** `data-theme` attribute rather than a cached variable, to stay in sync with programmatic changes.

```js
function updateIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  icon.textContent = isDark ? '☾' : '☀';
}
```

## Checklist

- [ ] New colour tokens defined in BOTH `:root` and `[data-theme='dark']`
- [ ] No hardcoded hex colours in component `<style>` blocks — only `var(--*)`
- [ ] Anti-FOUC script is synchronous and placed in `<head>` before CSS
- [ ] Toggle icon reflects actual `data-theme` attribute, not a cached boolean
- [ ] `localStorage.setItem('theme', value)` called on every toggle

## Common Mistakes

| Mistake | Fix |
|---|---|
| Hardcoded colour in component | Replace with `var(--color-*)` token |
| Theme flicker on reload | Ensure anti-FOUC script is in `<head>` with `is:inline` |
| Token missing dark override | Add to `[data-theme='dark']` block in `global.css` |
| Script uses `let`/`const` at top level of `is:inline` | Wrap in IIFE to avoid global leaks |
