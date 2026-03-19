# 电气工程行业官网

## 项目简介
这是一个现代化的电气工程行业官网，专注于展示公司的专业能力、服务项目、工程案例和联系信息。网站采用响应式设计，支持PC端和移动端访问，并包含深色模式切换功能。

## 技术栈
- React 18+
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion (动画效果)
- Sonner (提示组件)

## 本地开发

### 前置要求
- Node.js 16+
- PNPM 包管理器

### 开发步骤
1. 安装依赖
```bash
pnpm install
```

2. 启动开发服务器
```bash
pnpm dev
```
项目将在 http://localhost:3000 启动

## 项目构建

执行以下命令构建生产版本：
```bash
pnpm build
```

构建后的文件将生成在 `dist` 目录中。

## 部署上线指南

### 1. 静态网站托管服务

这是最简单的部署方式，适合纯前端网站：

#### Netlify
1. 注册并登录 Netlify 账户
2. 点击 "New site from Git"
3. 连接您的 Git 仓库
4. 配置构建命令：`pnpm build`
5. 配置发布目录：`dist`
6. 点击 "Deploy site"
7. 部署完成后，您将获得一个 Netlify 提供的临时域名

#### Vercel
1. 注册并登录 Vercel 账户
2. 点击 "New Project"
3. 导入您的 Git 仓库
4. Vercel 会自动识别项目配置
5. 点击 "Deploy"
6. 部署完成后，您将获得一个 Vercel 提供的临时域名

#### GitHub Pages
1. 在 GitHub 上创建仓库并推送代码
2. 在项目根目录创建 `.github/workflows/deploy.yml` 文件，内容如下：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install -g pnpm && pnpm install
      - name: Build
        run: pnpm build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
3. 提交文件并推送到 GitHub
4. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

### 2. 自定义域名配置
1. 在您的域名注册商处购买域名
2. 根据您选择的托管平台的指南，配置 DNS 记录
3. 通常需要添加 CNAME 记录指向托管平台提供的域名

### 3. 其他部署选项

#### Docker 部署
1. 在项目根目录创建 `Dockerfile`：
```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
```
2. 构建镜像：`docker build -t electrical-website .`
3. 运行容器：`docker run -p 80:80 electrical-website`

## 常见问题

### 部署后页面显示不正常
- 检查 `public` 目录下的资源是否正确加载
- 确认路由配置是否适合静态部署环境
- 查看浏览器控制台是否有错误信息

### 自定义域名无法访问
- 检查 DNS 记录是否正确配置
- 等待 DNS 记录生效（通常需要几小时到48小时）
- 确认托管平台是否已配置 SSL 证书（HTTPS）

## 项目维护
- 定期更新依赖包：`pnpm update`
- 监控网站性能和访问量
- 备份代码和配置

## 联系方式
如有问题，请联系我们的技术支持团队。