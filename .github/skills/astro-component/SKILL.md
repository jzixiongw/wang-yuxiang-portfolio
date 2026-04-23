---
name: astro-component
description: 'Create a new Astro UI component with TypeScript props, BEM CSS naming, bilingual (CN/EN) content, and dark mode support. Use when adding a new component, card, section, or widget to the portfolio site. Covers props interface, scoped or global CSS, slot usage, and accessibility attributes.'
argument-hint: 'component name and purpose (e.g. "SkillTag — a tag/badge chip showing a skill label")'
---

# Astro Component Creation

## When to Use
- Adding a new UI element (card, badge, section, hero, modal, toggle)
- Refactoring HTML repeated more than twice into a reusable component
- Replacing inline markup with a typed, bilingual-aware component

## Conventions in This Project

| Convention | Detail |
|---|---|
| Props typing | TypeScript `interface Props` inside the frontmatter fence |
| CSS naming | BEM — `.block__element--modifier` |
| Bilingual text | Parallel `<span class="lang-cn">` / `<span class="lang-en">` siblings |
| Dark mode | CSS custom properties (`var(--color-text)` etc.) — never hardcoded colours |
| Spacing | Multiples of `--spacing-unit` (8px) |
| Images | Always `loading="lazy"` and a descriptive `alt` |
| Interactivity | `is:inline` scripts for zero-JS-bundle client logic; IDs must be unique per page |

## Procedure

### 1. Create the file

Place the component at `src/components/<ComponentName>.astro`.  
File name: PascalCase, no spaces.

### 2. Write the frontmatter

```astro
---
interface Props {
  // required props — no default needed
  title: string;
  href: string;
  // optional props — always mark with ?
  subtitle?: string;
  titleEn?: string;
}

const { title, href, subtitle, titleEn } = Astro.props;
---
```

Rules:
- Every prop that is optional must use `?` in the interface and a conditional in the template.
- Never use `any`. Use `string | undefined` for unknown optional values.
- If the component accepts child content, use `<slot />` (no prop needed).

### 3. Write the template

```astro
<article class="my-component">
  <a class="my-component__link" href={href}>
    <h3 class="my-component__title">
      <span class="lang-cn">{title}</span>
      {titleEn && <span class="lang-en">{titleEn}</span>}
    </h3>
    {subtitle && (
      <p class="my-component__subtitle">{subtitle}</p>
    )}
  </a>
</article>
```

- Use semantic HTML (`<article>`, `<section>`, `<nav>`, `<header>` where appropriate).
- Add `aria-label` on icon-only buttons and non-descriptive links.
- Images: `<img src={src} alt={alt} loading="lazy" />`.

### 4. Write the styles (scoped)

Use a `<style>` block (Astro scopes these to the component automatically):

```astro
<style>
  .my-component {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: calc(var(--spacing-unit) * 2);
    transition: background 0.2s;
  }

  .my-component__link {
    color: var(--color-text);
    text-decoration: none;
  }

  .my-component__link:hover {
    background: var(--color-hover);
  }

  .my-component__title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
  }

  .my-component__subtitle {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin: calc(var(--spacing-unit) * 0.5) 0 0;
  }
</style>
```

Only use `global.css` classes for bilingual visibility (`.lang-cn`, `.lang-en`) — everything else goes in the scoped `<style>` block.

### 5. Use the component in a page

```astro
---
import MyComponent from '../components/MyComponent.astro';
---

<MyComponent href="/projects/foo/" title="项目标题" titleEn="Project Title" />
```

### 6. Checklist before committing

- [ ] `interface Props` is defined with correct types
- [ ] All optional props use `?` and conditional rendering
- [ ] BEM class names used throughout
- [ ] Only `var(--*)` tokens used for colours, spacing, and fonts
- [ ] `lang-cn` / `lang-en` siblings for every user-visible string
- [ ] `loading="lazy"` on any `<img>`
- [ ] `aria-label` on any icon-only interactive element
- [ ] No hardcoded pixel colours or font names

## Design Token Reference

See [./references/design-tokens.md](./references/design-tokens.md) for the full token list.

## Examples

- [src/components/ProjectCard.astro](../../../src/components/ProjectCard.astro) — card with typed image + title props
- [src/components/VideoEmbed.astro](../../../src/components/VideoEmbed.astro) — conditional rendering by URL type
- [src/components/VideoGrid.astro](../../../src/components/VideoGrid.astro) — array props with `.map()`
