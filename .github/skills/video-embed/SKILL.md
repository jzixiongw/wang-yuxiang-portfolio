---
name: video-embed
description: 'Add, update, or troubleshoot responsive video embeds in this Astro portfolio. Use when embedding a new MP4 file, Tencent Cloud VOD (腾讯云点播) iframe, or any external video URL. Covers the 16:9 aspect-ratio wrapper pattern, the VideoEmbed and VideoGrid components, bilingual captions, and autoplay/muted/loop attributes.'
argument-hint: 'video URL or use-case (e.g. "embed Tencent VOD URL on face-rigging project page", "add a 3-item video grid with captions")'
---

# Video Embedding

## Supported Video Types

| Type | Detection | Component |
|---|---|---|
| MP4 file | URL ends with `.mp4` | `<video>` element |
| Tencent Cloud VOD / any iframe | Other URLs | `<iframe>` element |
| Placeholder / dev stub | URL contains `placeholder` or `example.com` | Placeholder `<div>` |

Key components:
- [`src/components/VideoEmbed.astro`](../../../src/components/VideoEmbed.astro) — single embed
- [`src/components/VideoGrid.astro`](../../../src/components/VideoGrid.astro) — grid of embeds with captions

## 16:9 Aspect-Ratio Wrapper Pattern

All video containers use the padding-bottom trick to maintain a responsive 16:9 ratio:

```css
.video-embed__wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 = 9/16 = 0.5625 */
  height: 0;
  overflow: hidden;
  background: #000;
}

/* The <iframe> or <video> fills the wrapper absolutely */
.video-embed__wrapper iframe,
.video-embed__wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

For other ratios:
- 4:3 → `padding-bottom: 75%`
- 1:1 → `padding-bottom: 100%`
- 21:9 → `padding-bottom: 42.86%`

## Using VideoEmbed (Single Video)

```astro
---
import VideoEmbed from '../components/VideoEmbed.astro';
---

<VideoEmbed url="https://your-tencent-vod-url.mp4" />
```

Props:
| Prop | Type | Description |
|---|---|---|
| `url` | `string` | MP4 path or iframe-embeddable URL |

## Using VideoGrid (Multiple Videos)

```astro
---
import VideoGrid from '../components/VideoGrid.astro';
---

<VideoGrid items={[
  {
    url: 'https://example-vod.mp4',
    title: '角色绑定演示',
    titleEn: 'Character Rigging Demo',
    caption: '使用自定义工具包完成的面部绑定系统。',
    captionEn: 'Facial rigging system built with a custom toolkit.',
  },
  {
    url: 'https://example-motion.mp4',
    title: '动作捕捉测试',
    titleEn: 'Motion Capture Test',
  },
]} />
```

`VideoItem` interface (from `src/data/projects.ts`):
```ts
interface VideoItem {
  url: string;
  title: string;      // Chinese title (required)
  titleEn?: string;   // English title (optional)
  caption?: string;   // Chinese caption (optional)
  captionEn?: string; // English caption (optional)
}
```

## Adding Videos to a Project

Videos are stored in the `Project` data object under two fields:

```ts
// src/data/projects.ts
{
  slug: 'my-project',
  // Simple single-URL list (renders as VideoEmbed instances):
  vodEmbedUrls: [
    'https://1417160487.vod-qcloud.com/path/to/video.mp4',
  ],
  // Or a richer grid with titles and captions:
  videoItems: [
    {
      url: 'https://1417160487.vod-qcloud.com/path/to/video.mp4',
      title: '演示视频',
      titleEn: 'Demo Video',
      caption: '完整绑定流程演示。',
      captionEn: 'Full rigging workflow demonstration.',
    },
  ],
}
```

## `<video>` Attributes

Always use these attributes for MP4 videos in a portfolio context:

```html
<video
  src={url}
  controls
  autoplay
  muted
  loop
  playsinline
></video>
```

- `autoplay` requires `muted` — browsers block unmuted autoplay.
- `playsinline` prevents full-screen takeover on iOS.
- `controls` lets users pause/scrub — always include for accessibility.

## Checklist

- [ ] Video URL is an embeddable link (not a download link or share page URL)
- [ ] MP4 URLs end with `.mp4` for correct component branch
- [ ] Aspect-ratio wrapper applied (`position: relative; padding-bottom: 56.25%`)
- [ ] `<video>` uses `autoplay muted loop playsinline controls`
- [ ] `<iframe>` has `allowfullscreen` and `allow="autoplay; encrypted-media"`
- [ ] Bilingual `title` / `titleEn` provided for VideoGrid items
- [ ] `loading="lazy"` on `<iframe>` to defer off-screen loads

## Common Mistakes

| Mistake | Fix |
|---|---|
| Video does not autoplay | Add `muted` attribute alongside `autoplay` |
| iframe is wrong size | Ensure wrapper uses `position: relative; padding-bottom: 56.25%` |
| Tencent VOD link shows 403 | Use the embed URL from the VOD console, not the share link |
| Video breaks layout on mobile | Check wrapper has `overflow: hidden` |
