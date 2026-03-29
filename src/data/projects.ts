export interface Project {
  slug: string;
  title: string;
  date: string;
  cover: string;
  description: string;
  vodEmbedUrls: string[];
}

export const projects: Project[] = [
  {
    slug: 'davinci',
    title: 'DaVinci 项目',
    date: '2025-01',
    cover: '/images/davinci-cover.jpg',
    description: '作品详细介绍待补充。',
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
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/ac66521a5145403719774313122/akvG5PwjiyEA.mp4'],
  },
  {
    slug: 'nuke',
    title: 'Nuke 项目',
    date: '2025-01',
    cover: '/images/nuke-cover.jpg',
    description: '作品详细介绍待补充。',
    vodEmbedUrls: [],
  },
  {
    slug: 'taison',
    title: 'Taison 项目',
    date: '2025-01',
    cover: '/images/taison-cover.jpg',
    description: '作品详细介绍待补充。',
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
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/d8e03951vodtranscq1417160487/076e21205145403719700525575/v.f100070.mp4'],
  },
  {
    slug: 'whiteout',
    title: 'Whiteout 项目',
    date: '2025-01',
    cover: '/images/whiteout-cover.jpg',
    description: '作品详细介绍待补充。',
    vodEmbedUrls: [],
  },
];
