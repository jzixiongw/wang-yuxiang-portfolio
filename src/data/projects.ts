export interface VideoItem {
  url: string;
  title: string;
  titleEn?: string;
  caption?: string;
  captionEn?: string;
}

export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  cover: string;
  description: string;
  descriptionEn: string;
  featured: boolean;
  vodEmbedUrls: string[];
  videoItems?: VideoItem[];
  pdfUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'face-rigging',
    title: 'Face Rigging 项目',
    titleEn: 'Face Rigging Project',
    date: '2025-01',
    cover: '/images/face-rigging-cover.jpg',
    description: '运用自己制作的面部绑定工具包，搭建了完整的面部绑定系统. 项目中依次完成了面部基础骨骼搭建、控制器创建、权重制作、GUI设计与链接、眼部功能开发、Wrap4D混合变形制作与导入、Maya中基于代码的混合变形系统搭建，以及将混合变形融合进现有绑定流程。同时还包括嘴部表情驱动、拉链嘴、嘴唇整体控制、嘴部与下巴/鼻子的联动、褶皱法线贴图制作与连接、眉毛与前额表情协同、次级控制器整合与SDK镜像、常用Deformer应用，以及头部挤压拉伸等表情增强功能。最终完成了一个集较完整角色面部绑定系统。',
    descriptionEn: 'Built a complete facial rigging system using a custom-made facial rigging toolkit. The project covers facial skeleton setup, controller creation, weight painting, GUI design & linking, eye functionality, Wrap4D blendshape creation & import, code-based blendshape system in Maya, and integrating blendshapes into the existing rig pipeline. It also includes mouth expression drivers, zipper lips, overall lip control, mouth-jaw/nose linkage, wrinkle normal map creation & connection, eyebrow-forehead coordination, secondary controller integration with SDK mirroring, common Deformer applications, and head squash & stretch for expression enhancement.',
    featured: true,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8d37d8135145403719699194863/oO9SSARWUAYA.mp4'],
  },
  {
    slug: 'full-body-rigging',
    title: 'Full Body Rigging 项目',
    titleEn: 'Full Body Rigging Project',
    date: '2025-01',
    cover: '/images/full-body-rigging-cover.jpg',
    description: '运用了一些基础代码辅助实现了全身绑定效果，并添加了诸如：ik/fk切换，脊椎spine ik，四肢的stretch以及twisting（添加了counter flip功能），修型和辅助骨骼等诸多功能.',
    descriptionEn: 'Implemented a full-body rigging system with basic scripting support, featuring IK/FK switching, spine IK, limb stretch & twist (with counter-flip), corrective shapes, and helper joints.',
    featured: true,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8473b8b75145403721225775420/UWapTOvwAkUA.mp4'],
  },
  {
    slug: 'animation',
    title: 'Animation 项目',
    titleEn: 'Animation Project',
    date: '2025-01',
    cover: '/images/animation-cover.jpg',
    description: '该项目主要完成了一小段动画的手k制作。',
    descriptionEn: 'This project focused on hand-keying a short animation clip.',
    featured: false,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/076e2e255145403719700525895/XZwkkNq7QgYA.mp4'],
  },
  {
    slug: 'films',
    title: '影像编导作品集',
    titleEn: 'Film Directing Portfolio',
    date: '2025-01',
    cover: '/images/films-cover.jpg',
    description: '过往编导、摄影、灯光作品集合',
    descriptionEn: 'A collection of past directing, cinematography, and lighting works.',
    featured: false,
    vodEmbedUrls: [],
    pdfUrl: '/documents/王煜翔 影视作品集.pdf',
  },
  {
    slug: 'davinci',
    title: 'DaVinci 项目',
    titleEn: 'DaVinci Project',
    date: '2025-01',
    cover: '/images/davinci-cover.jpg',
    description: '该项目主要学习了达芬奇调色与特效的相关功能，并学习分级调色。',
    descriptionEn: 'This project explored DaVinci Resolve color grading and VFX features, including primary and secondary color correction.',
    featured: false,
    vodEmbedUrls: [
      'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8d37c7325145403719699194475/cN5PfpcZSd4A.mp4',
      'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/ac6700825145403719774314921/BXzFUhaIzSgA.mp4',
    ],
  },
  {
    slug: 'maya-light',
    title: 'Maya Light 项目',
    titleEn: 'Maya Lighting Project',
    date: '2025-01',
    cover: '/images/maya-light-cover.jpg',
    description: '该项目主要尝试在maya中制作夕阳下的灯光作品。',
    descriptionEn: 'This project focused on creating a sunset lighting scene in Maya.',
    featured: false,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/ac66521a5145403719774313122/akvG5PwjiyEA.mp4'],
  },
  {
    slug: 'nuke',
    title: 'Nuke 项目',
    titleEn: 'Nuke Project',
    date: '2025-01',
    cover: '/images/nuke-cover.jpg',
    description: '该项目主要是对于自己nuke学习的总结与展示，包括抠像，跟踪，与颜色管理等。',
    descriptionEn: 'A summary and showcase of my Nuke learning, including keying, tracking, and color management.',
    featured: false,
    vodEmbedUrls: [],
    videoItems: [
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/e78e47855145403720508567855/gWJpKjG1YnoA.mp4', title: '屏幕替换', titleEn: 'Screen Replacement', caption: '将原始屏幕内容替换为目标画面。', captionEn: 'Replaced on-screen content with target footage.' },
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8d38530e5145403719699195434/PTiQenCa9DsA.mp4', title: '相机跟踪', titleEn: 'Camera Tracking', caption: '完成实拍镜头的三维相机解算。', captionEn: 'Completed 3D camera solve for live-action footage.' },
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/ac6670ae5145403719774313889/tR7GunYQJE0A.mp4', title: '文字替换', titleEn: 'Text Replacement', caption: '替换画面中的原有文字信息。', captionEn: 'Replaced existing text information in the footage.' },
      { url: 'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8cc5788c5145403721222017720/Vw4rpB7oaEkA.mp4', title: '绿幕背景替换', titleEn: 'Green Screen Replacement', caption: '完成抠像并重建新的背景环境。', captionEn: 'Completed keying and rebuilt background environment.' },
    ],
  },
  {
    slug: 'taison',
    title: 'Taison 项目',
    titleEn: 'Taison Project',
    date: '2025-01',
    cover: '/images/taison-cover.jpg',
    description: '这是一个比较抽象聚焦于概念的短片作品，由我和其他团队成员一起在ue5中制作.所有的资产都为团队自己制作.我在其中参与了前中后期的大部分工作，诸如前期的想法落地，分镜，角色，特效等.该作品入围了意大利全国性赛事-TGA的决赛圈，并受邀在罗马展出。',
    descriptionEn: 'An abstract, concept-driven short film created collaboratively in UE5. All assets were made by the team. I contributed to most stages — from ideation, storyboarding, and character work to VFX. The piece was shortlisted for the Italian national TGA competition and exhibited in Rome.',
    featured: true,
    vodEmbedUrls: [
      'https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/8d3853525145403719699195456/LPiJSN9vC4MA.mp4',
    ],
  },
  {
    slug: 'ue-pcg',
    title: 'UE PCG 项目',
    titleEn: 'UE PCG Project',
    date: '2025-01',
    cover: '/images/ue-pcg-cover.jpg',
    description: '该项目的参考来自于网络教程，我因为想要学习ue5而制作的项目.主要搭建了一套在ue5内可以使用的程序化资产，并通过该套资产搭建起了这个片段的主体形状，之后使用另一套程序化植被资产进行资产的完善，再添加由speed tree制作的视觉中心的树木.最后再通过雾片，灯光，鸟群粒子等营造整体氛围。',
    descriptionEn: 'A UE5 learning project inspired by online tutorials. I built a set of procedural assets to form the main landscape, then added procedural foliage and a focal-point tree created in SpeedTree. Fog cards, lighting, and bird-flock particles complete the atmosphere.',
    featured: true,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/d8e03951vodtranscq1417160487/076e21205145403719700525575/v.f100070.mp4'],
  },
  {
    slug: 'whiteout',
    title: 'Whiteout 游戏开发项目',
    titleEn: 'Whiteout Game Dev Project',
    date: '2025-01',
    cover: '/images/whiteout-cover.jpg',
    description: '该项目是在参加Global Game Jam时制作的，这是一个小组项目，我主要在项目中负责美术与一部分的玩法创意的提出。',
    descriptionEn: 'Created during a Global Game Jam. As a team project, I was mainly responsible for art and contributed gameplay design ideas.',
    featured: true,
    vodEmbedUrls: ['https://1417160487.vod-qcloud.com/01f64ba9vodcq1417160487/f307c0365145403721220048269/arD3pFf6eAQA.mp4'],
  },
];
