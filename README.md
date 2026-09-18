# 新物 · AI 硬件产品库基础版

Astro 7.3.3 + TypeScript，静态多页面网站。站名暂定“新物”，使用 GitHub Pages 发布在线设计预览，尚未绑定独立域名。

## 在线预览

- 网站：https://siuserxiaowei.github.io/xinwu-hardware/
- 仓库：https://github.com/siuserxiaowei/xinwu-hardware
- 推送 `main` 后，GitHub Actions 自动检查、构建并发布。
- Pages 构建设置 `BASE_PATH=/xinwu-hardware`；本地开发默认根路径。

## 本地运行

```sh
npm install
npm run dev
```

默认地址：http://127.0.0.1:4321/ 。开发服务只监听本机。

```sh
npm run check
npm run build
npm run preview
```

## 已实现

- 首页精选、六款产品目录、按类别筛选、名称与用途搜索、空结果处理、可分享筛选地址。
- 六个独立产品详情页：用途、使用流程、购买前须知、外部视频搜索入口、官方来源、关联产品。
- 三个灵感专题、商务合作介绍、本机草稿保存与 JSON 导出、关于页面、404。
- 桌面和手机布局、移动导航、键盘操作、减少动画偏好。
- 图片本地 WebP，前端无外部视频播放器、无视频文件、无外部字体请求。

## 当前边界

- 所有产品均为公开资料整理，未实测，无虚构评分、视频、账号、客户案例或流量。
- 详情中的 B 站与小红书入口是明确标注的外部搜索，不是站主已经发布的自制视频。后续提供真实视频 URL 后，应替换成标题、封面和作品直达链接。
- 表单只保存当前浏览器本机草稿或导出文件，不发送、不上传；商务邮箱和收件后台尚未配置。
- 页面设有 `noindex,nofollow`，防止预览内容被误收录。正式运营前应完成正式内容审核、图片使用授权、自媒体账号、联系方式、站点地址和 SEO 配置。
- 图片来源为品牌官方页面。原始预览素材与来源清单在 `reference-assets/`，不属于 `public/`，不会随静态页面发布；版权归品牌方，公开发布前确认授权或替换自摄图片。

## 内容与页面

- `src/data/products.ts`：产品内容、分类与官方链接。
- `src/pages/products/[slug].astro`：产品详情模板。
- `src/components/Catalog.astro`：目录、客户端搜索与筛选。
- `src/styles/global.css`：视觉与响应式样式。
- `public/images/`：优化后的页面图片。
- `reference-assets/sources.json`：素材源 URL。
- `src/data/icons.ts`：新物定制图标的唯一源数据。
- `/design/`：图标说明、尺寸预览和 SVG 下载。
- `docs/icon-system.md`：图标设计原则、参考来源与使用约定。

## 验证

`scripts/smoke.mjs` 使用 Playwright 检查静态路由、图片、桌面与手机溢出、搜索筛选、外链、草稿与导出、没有视频加载或外部网络请求。截图与结果存放在 `verification/`。

如果使用 Codex 桌面自带的 Playwright：

```sh
PLAYWRIGHT_PACKAGE_ROOT=/path/to/runtime/node_modules node scripts/smoke.mjs
```

其他环境安装 Playwright 后直接运行 `node scripts/smoke.mjs`。测试只写入测试浏览器本机数据，测试后清除，不发送表单。
