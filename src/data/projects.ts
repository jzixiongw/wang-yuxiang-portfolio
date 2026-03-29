export interface VideoItem {
  url: string;
  title: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  cover: string;
  description: string;
  featured: boolean;
  vodEmbedUrls: string[];
  videoItems?: VideoItem[];
}

export const projects: Project[] = [
  {
    slug: 'davinci',
    title: 'DaVinci 项目',
    date: '2025-01',
    cover: '/images/davinci-cover.jpg',
    description: '作品详细介绍待补充。',
    featured: true,
    vodEmbedUrls: [
      'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8d37c7325145403719699194475/cN5PfpcZSd4A.mp4',
      'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/ac6700825145403719774314921/BXzFUhaIzSgA.mp4',
    ],
  },
  {
    slug: 'maya-light',
    title: 'Maya Light 项目',
    date: '2025-01',
    cover: '/images/maya-light-cover.jpg',
    description: '作品详细介绍待补充。',
    featured: true,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/ac66521a5145403719774313122/akvG5PwjiyEA.mp4'],
  },
  {
    slug: 'nuke',
    title: 'Nuke 项目',
    date: '2025-01',
    cover: '/images/nuke-cover.jpg',
    description: '作品详细介绍待补充。',
    featured: true,
    vodEmbedUrls: [],
    videoItems: [
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/e78e47855145403720508567855/gWJpKjG1YnoA.mp4', title: '屏幕替换', caption: '字幕说明待补充' },
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8d38530e5145403719699195434/PTiQenCa9DsA.mp4', title: '相机跟踪', caption: '字幕说明待补充' },
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/ac6670ae5145403719774313889/tR7GunYQJE0A.mp4', title: '文字替换', caption: '字幕说明待补充' },
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8cc5788c5145403721222017720/Vw4rpB7oaEkA.mp4', title: '绿幕背景替换', caption: '字幕说明待补充' },
    ],
  },
  {
    slug: 'taison',
    title: 'Taison 项目',
    date: '2025-01',
    cover: '/images/taison-cover.jpg',
    description: '作品详细介绍待补充。',
    featured: false,
    vodEmbedUrls: [
      'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8d3853525145403719699195456/LPiJSN9vC4MA.mp4',
    ],
  },
  {
    slug: 'ue-pcg',
    title: 'UE PCG 项目',
    date: '2025-01',
    cover: '/images/ue-pcg-cover.jpg',
    description: '作品详细介绍待补充。',
    featured: false,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/d8e03951vodtranscq1417160487/076e21205145403719700525575/v.f100070.mp4'],
  },
  {
    slug: 'whiteout',
    title: 'Whiteout 项目',
    date: '2025-01',
    cover: '/images/whiteout-cover.jpg',
    description: '作品详细介绍待补充。',
    featured: false,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/f307c0365145403721220048269/arD3pFf6eAQA.mp4'],
  },
];
