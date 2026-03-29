export interface Project {
  slug: string;
  title: string;
  date: string;
  cover: string;
  description: string;
  vodEmbedUrl: string;
}

export const projects: Project[] = [
  {
    slug: 'urban-echo',
    title: '城市回响',
    date: '2025-12',
    cover: '/images/project-1.svg',
    description:
      '「城市回响」是一件基于声音采集与数据可视化的交互装置作品。通过在城市不同区域放置声音传感器，实时收集环境音并将其转化为动态视觉图形。观众可以通过触摸屏幕与声音景观进行互动，感受城市脉搏的律动。该作品探讨了人与城市环境之间的隐性联系，试图唤起人们对日常声音的关注与思考。作品曾在校内新媒体艺术展中展出，获得师生的广泛好评。',
    vodEmbedUrl: 'https://player.example.com/vod-embed-placeholder-1',
  },
  {
    slug: 'memory-fragments',
    title: '记忆碎片',
    date: '2025-06',
    cover: '/images/project-2.svg',
    description:
      '「记忆碎片」是一部实验性短片，时长约8分钟。影片通过非线性叙事手法，将个人记忆与城市空间进行交织重组。拍摄使用了多种媒介混合的方式，包括16毫米胶片、手机影像与AI生成画面，探索记忆的模糊性与可塑性。后期制作中运用了大量拼贴与叠加技法，营造出介于真实与虚幻之间的视觉体验。作品入选了2025年度青年影像创作计划。',
    vodEmbedUrl: 'https://player.example.com/vod-embed-placeholder-2',
  },
  {
    slug: 'silent-dialogue',
    title: '无声对话',
    date: '2025-03',
    cover: '/images/project-3.svg',
    description:
      '「无声对话」是一组交互式数字装置，由三个独立但相互关联的单元组成。每个单元通过摄像头捕捉观众的面部表情与肢体动作，并将其转化为抽象的图形语言投射到对面的屏幕上。当两位观众分别站在装置两端时，他们只能通过这种转译后的抽象图形进行"对话"。作品反思了数字时代人际沟通中信息的失真与重构，以及非语言交流的可能性。技术上使用了MediaPipe进行实时姿态检测，结合TouchDesigner进行视觉渲染。',
    vodEmbedUrl: 'https://player.example.com/vod-embed-placeholder-3',
  },
];
