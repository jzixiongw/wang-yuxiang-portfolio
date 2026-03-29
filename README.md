# 王宇翔 · 个人作品集

基于 Astro 构建的极简中文作品集网站，适配 GitHub Pages 部署。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## 部署到 GitHub Pages

1. 将项目推送到 GitHub 仓库
2. 打开 `astro.config.mjs`，将 `site` 改为你的 GitHub Pages 地址（如 `https://your-username.github.io`），将 `base` 改为你的仓库名（如 `/wang-yuxiang-portfolio`）
3. 在仓库 Settings → Pages 中，将 Source 设为 **GitHub Actions**
4. 推送到 `main` 分支后会自动触发部署

## 项目结构

```
src/
├── components/        # 组件
│   ├── DarkModeToggle.astro  # 深色模式切换
│   ├── ProjectCard.astro     # 作品卡片
│   └── VideoEmbed.astro      # 视频嵌入
├── data/              # 数据
│   ├── site.ts        # 站点信息（姓名、学校、简介等）
│   └── projects.ts    # 作品列表
├── layouts/
│   └── Layout.astro   # 基础布局
├── pages/
│   ├── index.astro    # 首页
│   └── projects/
│       └── [slug].astro  # 作品详情页
├── styles/
│   └── global.css     # 全局样式
public/
└── images/            # 作品封面图片
```

## 内容修改

- **个人信息**：编辑 `src/data/site.ts`
- **作品数据**：编辑 `src/data/projects.ts`，每个作品包含 `slug`、`title`、`date`、`cover`、`description`、`vodEmbedUrl` 字段
- **封面图片**：替换 `public/images/` 下的图片文件，并更新 `projects.ts` 中对应的 `cover` 路径
- **视频嵌入**：将 `vodEmbedUrl` 替换为真实的腾讯云 VOD 嵌入链接（iframe src 地址）