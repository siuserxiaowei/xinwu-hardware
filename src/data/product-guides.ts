export interface Guide {
  title: string;
  deck: string;
  image: { file: string; alt: string; width: number; height: number; caption: string; source: string; credit: string };
  toc: [string, string][];
  sources: { title: string; url: string; note: string }[];
}
export const guides: Record<string, Guide> = {
  'xiaodu-bear': {
    title: '小度熊：把 AI 对话，放进一只毛绒玩具里',
    deck: '从马年造型、语音互动到日常陪伴，认识实丰文化与百度智能云合作的 AI 小度熊。它的吸引力，藏在“愿不愿意经常和它说话”这件小事里。',
    image: { file: 'xiaodu-bear', alt: '马年款 AI 小度熊品牌展示图：棕色毛绒熊戴橙色马头帽，身穿牛仔服', width: 648, height: 312, caption: '马年款 AI 小度熊展示图。图中场景与功能文案为品牌宣传内容。', source: 'https://www.chinababyfair.com/news/497.html', credit: '深圳玩具展参展资料 / 实丰文化' },
    toc: [['identity','这是一只什么熊'],['design','为什么做成毛绒玩具'],['features','它可以陪你做什么'],['setup','第一次怎么用'],['cost','联网、价格与服务'],['verdict','适合谁，怎么看待它'],['faq','常见问题']],
    sources: [
      { title: '实丰文化投资者关系活动记录 · 2025.12.03', url: 'https://static.cninfo.com.cn/finalpage/2025-12-03/1224847222.PDF', note: '公司披露；用于核对合作关系、毛绒形态、可拆卸服饰及功能定位。厂商描述不等于独立测试结果。' },
      { title: '实丰文化爆款 AI 玩具将亮相 2026 深圳玩具展&潮玩展', url: 'https://www.chinababyfair.com/news/497.html', note: '展会参展资料；用于核对马年款外观、产品身份与配图。' },
      { title: '百度智能云 · AI 玩具解决方案', url: 'https://cloud.baidu.com/solution/toy.html', note: '技术方案与小度熊 Demo；用于解释云端交互思路，不作为零售款全部功能已开放的证明。' },
      { title: '《中兴大跨界：AI 玩具，跑步入场》· 2026.03.06', url: 'https://finance.sina.com.cn/roll/2026-03-06/doc-inhpzvnm9172171.shtml', note: '行业报道；299 元为文中回顾的发售定价，不是本站核实的当前成交价。' },
    ],
  },
  'm20-astronaut': {
    title: 'AI 宇航员：这个桌面小家伙，究竟能做什么？',
    deck: '以梦多福 M20 / DODO 为例，拆开理解它的四种身份：桌面摆件、小音箱、时钟夜灯，以及语音互动设备。选购时，外壳之外的软件同样重要。',
    image: { file: 'm20-astronaut', alt: '梦多福 M20 DODO 宇航员正面资料照片，白色太空服、黑色面罩和腹部显示区', width: 1199, height: 800, caption: '梦多福 M20 / DODO 正面。照片中的面罩未点亮；保留原作者标识。', source: 'https://www.52audio.com/archives/243923.html', credit: '我爱音频网 · 拆解报告' },
    toc: [['identity','先认准具体版本'],['design','从外观认识硬件'],['features','放在桌上怎么用'],['setup','连接与使用流程'],['cost','AI 和音乐怎样收费'],['verdict','适合谁，怎么看待它'],['faq','常见问题']],
    sources: [
      { title: '我爱音频网 · 拆解报告：梦多福 M20 智能 AI 宇航员 · 2025.06.25', url: 'https://www.52audio.com/archives/243923.html', note: '第三方实物拆解；本文的 M20 外观、接口与硬件数据据此整理。两张产品照片署名引用，不代表本站亲自拆机。' },
      { title: '中国人工智能产业发展联盟 · AI 互动玩具商品资料', url: 'https://caip.org.cn/mall/detail?goodsId=13', note: '另一款数芯 QYAI-AC-A100 的商品说明，列有轻语 AI 与 Wi-Fi 等信息；仅用于说明同类宇航员的软件和配置存在差异。' },
      { title: 'App Store 中国区 · 轻语 AI', url: 'https://apps.apple.com/cn/app/轻语ai/id6745646149', note: '核对日期 2026.09.19；软件功能与内购价格示例。是否适用于所购设备，应以包装说明和账号权益为准。' },
    ],
  },
};
