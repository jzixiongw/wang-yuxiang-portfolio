---
name: project-data
description: 'Add, edit, or manage portfolio project entries in this Astro site. Use when adding a new project, updating project metadata, changing a cover image, toggling featured status, adding video items, attaching a PDF, or fixing a project slug. Covers the Project TypeScript interface, the projects array in projects.ts, and how data flows into project pages and the home page grid.'
argument-hint: 'what to do (e.g. "add a new featured project called Motion Capture", "update the description for face-rigging", "attach a PDF to game-design project")'
---

# Project Data Management

## Data Flow

```
src/data/projects.ts (Project[])
  ↓ imported by
src/pages/index.astro         → filters featured/others → ProjectCard grid
src/pages/projects/[slug].astro → finds project by slug → detail page
```

Key file: [`src/data/projects.ts`](../../../src/data/projects.ts)

## Project Interface

```ts
export interface VideoItem {
  url: string;
  title: string;       // Chinese label (required)
  titleEn?: string;    // English label (optional)
  caption?: string;    // Chinese caption (optional)
  captionEn?: string;  // English caption (optional)
}

export interface Project {
  slug: string;           // URL segment — lowercase, hyphenated, unique
  title: string;          // Chinese title
  titleEn: string;        // English title
  date: string;           // 'YYYY-MM' format
  cover: string;          // absolute path from /public, e.g. '/images/foo.jpg'
  description: string;    // Chinese description
  descriptionEn: string;  // English description
  featured: boolean;      // true → appears in primary grid; false → "other projects"
  vodEmbedUrls: string[]; // simple list of video URLs (used if videoItems is absent)
  videoItems?: VideoItem[];// richer video list with titles and captions
  pdfUrl?: string;        // path to PDF under /public/documents/
}
```

## Adding a New Project

### Step 1 — Add assets to `public/`

```
public/
  images/
    my-project-cover.jpg   ← 1200×675px recommended (16:9)
  documents/
    my-project.pdf         ← optional
```

### Step 2 — Add the project entry to `projects.ts`

Insert a new object into the `projects` array. Order in the array = order on the page.

```ts
export const projects: Project[] = [
  // … existing projects …
  {
    slug: 'my-project',
    title: '我的新项目',
    titleEn: 'My New Project',
    date: '2025-06',
    cover: '/images/my-project-cover.jpg',
    description: '用中文描述这个项目的内容、技术和成果。',
    descriptionEn: 'Describe the project content, techniques, and outcomes in English.',
    featured: true,
    vodEmbedUrls: [],
    videoItems: [
      {
        url: 'https://1417160487.vod-qcloud.com/path/to/video.mp4',
        title: '项目演示',
        titleEn: 'Project Demo',
        caption: '完整工作流程展示。',
        captionEn: 'Full workflow demonstration.',
      },
    ],
    pdfUrl: '/documents/my-project.pdf',
  },
];
```

### Step 3 — Verify the project page renders

Run `npm run dev` and visit `/projects/my-project/`.  
The `[slug].astro` page finds the project by matching `slug` to the URL parameter.

## Slug Rules

- Lowercase letters, digits, and hyphens only: `face-rigging`, `game-design-2025`
- No spaces, underscores, or special characters
- Must be unique across all projects
- Must match the folder/file convention used in `[slug].astro`

## Featured vs Other Projects

```ts
featured: true   // → Primary grid on homepage (shows first)
featured: false  // → "Other Projects" section (shows below)
```

On the index page:
```ts
const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
```

## Cover Image Guidelines

| Property | Recommendation |
|---|---|
| Aspect ratio | 16:9 (displays best in the grid) |
| Dimensions | 1200 × 675px minimum |
| Format | JPEG for photos/renders, PNG for flat graphics |
| Location | `public/images/<slug>-cover.jpg` |
| Reference in data | `/images/<slug>-cover.jpg` (no `/public` prefix) |

## PDF Attachment

```ts
pdfUrl: '/documents/my-project.pdf'
```

- Place the file at `public/documents/my-project.pdf`
- The `[slug].astro` page renders a download link when `pdfUrl` is present
- Link opens in a new tab with `target="_blank" rel="noopener noreferrer"`

## Checklist

- [ ] `slug` is unique, lowercase, hyphenated
- [ ] `cover` path starts with `/images/` (not `/public/images/`)
- [ ] Cover image exists in `public/images/`
- [ ] `date` is in `'YYYY-MM'` format
- [ ] Both `title` (CN) and `titleEn` (EN) are filled in
- [ ] Both `description` (CN) and `descriptionEn` (EN) are filled in
- [ ] `featured` is set deliberately
- [ ] `vodEmbedUrls` is at least an empty array `[]` (never `undefined`)
- [ ] PDF placed in `public/documents/` if `pdfUrl` is set

## Common Mistakes

| Mistake | Fix |
|---|---|
| Slug has spaces or capitals | Use lowercase hyphens: `my-project` |
| Cover image not found | Check path is `/images/foo.jpg` (no `/public`) and file exists |
| Project page 404 | Ensure slug in data matches the URL exactly |
| `vodEmbedUrls` is `undefined` | Set to `[]` if no videos |
| Project not shown on homepage | Check `featured` field and that it's exported in `projects` array |
