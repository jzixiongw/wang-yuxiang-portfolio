import { defineConfig } from 'astro/config';

// GitHub Pages 部署配置
// 请将下方 site 替换为你的 GitHub Pages 地址
// 将 base 替换为你的仓库名（如 /wang-yuxiang-portfolio）
// 如果部署到 username.github.io 根域名，则 base 设为 '/'
export default defineConfig({
  site: 'https://jzixiongw.github.io',
  base: '/wang-yuxiang-portfolio',
  output: 'static',
});
