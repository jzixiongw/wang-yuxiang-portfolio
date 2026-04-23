---
name: i18n-bilingual
description: 'Add, update, or debug bilingual (Chinese/English) content in this Astro portfolio. Use when adding translated text, wiring up a new UI string, adding bilingual captions to a component, or fixing language toggle regressions. Covers the data-lang CSS pattern, lang-cn/lang-en classes, the i18n.ts data file, and TypeScript-typed translation objects.'
argument-hint: 'what you need to translate or fix (e.g. "add EN translation for hero tagline", "add bilingual caption to VideoGrid")'
---

# Bilingual (CN/EN) i18n

## Architecture Overview

This project uses a **CSS-first i18n approach** — no runtime JS framework. Language state is stored on `<html data-lang>` and CSS hides the inactive language.

```
localStorage('lang') → data-lang on <html>
  ↓
global.css:
  html[data-lang='en'] .lang-cn { display: none !important; }
  html[data-lang='cn'] .lang-en { display: none !important; }
  html:not([data-lang]) .lang-en { display: none !important; }
```

Key files:
- [`src/data/i18n.ts`](../../../src/data/i18n.ts) — `ui` translation object, `siteConfigEn`
- [`src/data/site.ts`](../../../src/data/site.ts) — Chinese site config (`siteConfig`)
- [`src/styles/global.css`](../../../src/styles/global.css) — visibility rules
- [`src/components/LanguageToggle.astro`](../../../src/components/LanguageToggle.astro) — toggle button

## Adding a New UI String

### Step 1 — Add to `i18n.ts`

```ts
// src/data/i18n.ts
export const ui = {
  cn: {
    // existing keys…
    viewDetails: '查看详情',     // ← add here
  },
  en: {
    // existing keys…
    viewDetails: 'View Details', // ← and here
  },
} as const;
```

`as const` ensures the object is deeply readonly and enables literal type inference — do not remove it.

### Step 2 — Import and use in a page or component

```astro
---
import { ui } from '../data/i18n';
---

<span class="lang-cn">{ui.cn.viewDetails}</span>
<span class="lang-en">{ui.en.viewDetails}</span>
```

## Bilingual Template Patterns

### Static text (most common)
```astro
<h2>
  <span class="lang-cn">主要项目</span>
  <span class="lang-en">Featured Projects</span>
</h2>
```

### Dynamic text from data (e.g. project title)
```astro
<div class="project-card__title">
  <span class="lang-cn">{title}</span>
  {titleEn && <span class="lang-en">{titleEn}</span>}
</div>
```
Always guard optional EN translations with `&&` — not all content has an EN version.

### List items
```astro
<ul class="lang-cn">
  {siteConfig.resumeItems.map((item) => <li>{item}</li>)}
</ul>
<ul class="lang-en">
  {siteConfigEn.resumeItems.map((item) => <li>{item}</li>)}
</ul>
```
For lists, apply the language class to the container (`<ul>`) rather than each `<li>`.

### Aria labels
Interactive elements need a single `aria-label` (pick one language or use a neutral English label):
```astro
<button aria-label="Switch language / 切换语言">…</button>
```

## TypeScript Data Pattern

When a data type has bilingual fields, use this naming convention:

```ts
interface Project {
  title: string;       // Chinese (primary)
  titleEn: string;     // English (always required for featured content)
  description: string;
  descriptionEn: string;
  caption?: string;    // Optional Chinese
  captionEn?: string;  // Optional English — omit field entirely if N/A
}
```

## Checklist

- [ ] Every user-visible string has a `lang-cn` and `lang-en` sibling (or container class)
- [ ] New `ui` keys added to **both** `cn` and `en` objects in `i18n.ts`
- [ ] `as const` preserved on `ui` export
- [ ] Optional EN translations guarded with `&&` conditional
- [ ] `aria-label` on interactive elements (language-neutral or bilingual)
- [ ] No EN-only or CN-only text visible by default — both must render correctly

## Common Mistakes

| Mistake | Fix |
|---|---|
| Text visible in wrong language | Verify `lang-cn`/`lang-en` class is on the element or a parent |
| Both languages visible at once | Check `global.css` visibility rules are intact; check `data-lang` is being set |
| Missing EN key causes TS error | Add the key to `ui.en` in `i18n.ts` |
| Using `display: none` inline | Use the class system — inline styles override the CSS rules |
