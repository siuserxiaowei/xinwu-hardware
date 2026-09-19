# 小度熊与宇航员产品长文

## 范围

- 用户确认百度熊、毛绒熊是同一只；仅制作小度熊与宇航员两篇，不制作飞飞兔。
- 新增路由 `/products/xiaodu-bear/`、`/products/m20-astronaut/`，接入首页产品库与陪伴专题。
- 保留原有六款产品正文、E 方案图标和外部视频模式。
- 两篇定位为公开资料解读，未使用样机，不提供自测评分、续航、识别成功率或儿童学习效果。
- 宇航员正文锚定第三方拆解的梦多福 M20 / DODO；数芯 QYAI-AC-A100 与轻语 AI 仅作为独立的软件方案示例，不合并配置。

## 图片来源记录

采集及核对日期：2026-09-19。图片仅转换为 WebP 和压缩，保留原构图、宣传文字和作者标识。未获得或宣称额外的品牌/摄影作品授权；署名与原文链接保留在每张图片下，原作者权利不因署名而转移。用途为对应产品的图文介绍和评论，不作为本站原创摄影或可再分发素材包。

| 本地文件 | 来源页面 | 原始图片地址 |
| --- | --- | --- |
| `public/images/xiaodu-bear.webp` | https://www.chinababyfair.com/news/497.html | https://img.chinatoyfair.com/toy_fair/20260310/b29f41d8bef46f13daedef9c560a7f43.png |
| `public/images/m20-astronaut.webp` | https://www.52audio.com/archives/243923.html | https://52audio-images.oss-cn-shenzhen.aliyuncs.com/wp-content/uploads/2025/06/2025062510495518.jpg |
| `public/images/m20-back.webp` | https://www.52audio.com/archives/243923.html | https://52audio-images.oss-cn-shenzhen.aliyuncs.com/wp-content/uploads/2025/06/2025062510494854.jpg |

使用流程图为本站 HTML/CSS 绘制的说明图，不冒充产品截图。全部图片本地静态提供，无远程播放器、视频托管或第三方媒体加载。

## 事实边界

- 小度熊 299 元为 2026-03-06 报道回顾的发售定价，非现价。
- 百度玩具方案的 Demo 能力不推定为零售款全部开放功能。
- M20 的 1800mAh、40mm / 5W、双麦等参数来自 2025-06-25 第三方样机拆解，非所有同造型产品参数。
- 轻语 AI 中国区 App Store 当日内购示例：高级 AI 模型年卡 130 元，音乐年卡 218 元。不能推导为所有 M20 必付金额；权益以设备与账号为准。
- 不公开用户飞书文档、个人操作记录或私有知识库路径。

## 验证

- `npm run check`
- `BASE_PATH=/xinwu-hardware npm run build`
- 原有浏览器 smoke 脚本扩充两条路由及手机页面检查；产品总数更新为 8，陪伴分类更新为 4。
- 独立核对两篇目录与注释锚点、正文长度、来源图片加载及电脑/手机截图。
