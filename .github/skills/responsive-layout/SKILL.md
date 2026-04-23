---
name: responsive-layout
description: 'Build or fix responsive CSS layouts for this Astro portfolio. Use when creating multi-column grids, adjusting mobile breakpoints, fixing overflow, building a new page section layout, or tuning spacing at different screen sizes. Covers CSS Grid, the 640px breakpoint, the max-width container, and the spacing unit system.'
argument-hint: 'describe the layout (e.g. "3-column image gallery that collapses to 1 column on mobile")'
---

# Responsive Layout

## Project Layout System

| Concept | Value | Token |
|---|---|---|
| Content max-width | `960px` | `var(--max-width)` |
| Base spacing unit | `8px` | `var(--spacing-unit)` |
| Mobile breakpoint | `640px` | `@media (max-width: 640px)` |
| Column gap (grid) | `24px` | `calc(var(--spacing-unit) * 3)` |

The outer container is set globally:

```css
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 calc(var(--spacing-unit) * 3);
}
```

## CSS Grid Patterns

### Standard 2-column grid (used for project cards)

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--spacing-unit) * 3);
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
```

### 3-column grid (e.g. video gallery)

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--spacing-unit) * 2);
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
```

### Auto-fill responsive grid (no breakpoints needed)

Best for uniform items where exact column count doesn't matter:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: calc(var(--spacing-unit) * 3);
}
```

### Header / nav bar (flex with space-between)

```css
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--spacing-unit) * 3) 0;
}
```

## Procedure: Adding a New Section Layout

### 1. Write the HTML structure in the Astro page/component

Use semantic sectioning elements:

```astro
<section class="my-section">
  <h2 class="my-section__heading">…</h2>
  <div class="my-section__grid">
    {items.map((item) => <MyCard {...item} />)}
  </div>
</section>
```

### 2. Write the CSS (in a `<style>` block or `global.css`)

```css
.my-section {
  margin-bottom: calc(var(--spacing-unit) * 8);
}

.my-section__heading {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: calc(var(--spacing-unit) * 3);
}

.my-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--spacing-unit) * 3);
}

@media (max-width: 640px) {
  .my-section__grid {
    grid-template-columns: 1fr;
  }
}
```

### 3. Verify at key widths

Test at: 375px (iPhone SE), 640px (breakpoint), 768px (tablet), 960px+ (desktop).

## Spacing Rules

- **Between sections**: `calc(var(--spacing-unit) * 8)` (64px)
- **Inside a section (heading → content)**: `calc(var(--spacing-unit) * 3)` (24px)
- **Card internal padding**: `calc(var(--spacing-unit) * 2)` (16px)
- **Tight spacing (icon + label)**: `calc(var(--spacing-unit) * 0.5)` (4px)

## Checklist

- [ ] Uses CSS Grid or Flexbox — no floats, no absolute positioning for layout
- [ ] All spacing uses `calc(var(--spacing-unit) * N)` — no raw `px` spacing values
- [ ] Mobile breakpoint `@media (max-width: 640px)` collapses to single column
- [ ] Container is bounded by `var(--max-width)` and centred with `margin: 0 auto`
- [ ] No horizontal overflow on mobile (`overflow-x: hidden` on `body` if needed)

## Common Mistakes

| Mistake | Fix |
|---|---|
| Hardcoded pixel gaps | Use `calc(var(--spacing-unit) * N)` |
| Layout breaks at 640px | Add `@media (max-width: 640px)` override |
| Content bleeds to edge on mobile | Ensure `.container` padding is applied |
| Grid children overflow grid | Add `min-width: 0` to grid children |
