// Original Xinwu line drawings. Shared by the interface, preview and SVG downloads.
// A 24-unit canvas, 1.65-unit round strokes, with open device-like enclosures.
export const icons = {
  devices: { label: '全部硬件', group: 'category', meaning: '浏览所有产品类别', paths: ['M5 3.5h3A1.5 1.5 0 0 1 9.5 5v4H3.5V5A1.5 1.5 0 0 1 5 3.5ZM14.5 3.5h4A2 2 0 0 1 20.5 5.5v9h-6V3.5ZM3.5 13h6v5.5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V13ZM14.5 18.5h6'], accent: 'M6.5 6.5h.01' },
  glasses: { label: '智能眼镜', group: 'category', meaning: '带有智能功能的眼镜设备', paths: ['M2.5 11.5h7v3a3.5 3.5 0 0 1-7 0v-3ZM14.5 11.5h7v3a3.5 3.5 0 0 1-7 0v-3ZM9.5 12.5a3.2 3.2 0 0 1 5 0M2.5 11.5l1-5h3M21.5 11.5l-1-5h-3'], accent: 'M16.8 14h1.5' },
  recorder: { label: '录音与效率', group: 'category', meaning: '录音、转写和整理信息的设备', paths: ['M15 3.5H8a2.5 2.5 0 0 0-2.5 2.5v12A2.5 2.5 0 0 0 8 20.5h8a2.5 2.5 0 0 0 2.5-2.5v-7M9 11v5M12 9v9M15 12v3'], accent: 'M18 4.5v2' },
  robot: { label: '陪伴机器人', group: 'category', meaning: '用表情、动作和声音互动的机器人', paths: ['M6 6.5h12A2.5 2.5 0 0 1 20.5 9v7A2.5 2.5 0 0 1 18 18.5H6A2.5 2.5 0 0 1 3.5 16V9A2.5 2.5 0 0 1 6 6.5ZM8.5 11v2M15.5 11v2M8 18.5v2M16 18.5v2M12 6.5V4'], accent: 'M12 2.5h.01' },
  handheld: { label: '随身 AI', group: 'category', meaning: '可以随身携带的 AI 硬件', paths: ['M16 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V11M8 8h7v6H8zM9 17h4'], accent: 'M19 5v2' },
  search: { label: '搜索', group: 'action', meaning: '按产品名称或用途查找', paths: ['M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM15 15l5.5 5.5M6 10a4 4 0 0 1 4-4'] },
  menu: { label: '菜单', group: 'action', meaning: '展开网站导航', paths: ['M4 6h16M4 12h11M4 18h16'] },
  close: { label: '关闭', group: 'action', meaning: '收起当前菜单', paths: ['m6 6 12 12M18 6 6 18'] },
  submit: { label: '提交产品', group: 'action', meaning: '填写希望被收录的产品资料', paths: ['M14 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5v-5M8.5 10h3M8.5 14h7'], accent: 'M18 3v6M15 6h6' },
  article: { label: '产品介绍', group: 'content', meaning: '阅读图文资料，不能用作实测认证', paths: ['M14 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V9M9 9h3M9 13h6M9 17h4'], accent: 'M18 3.5v2' },
  collections: { label: '灵感专题', group: 'content', meaning: '围绕同一生活场景探索多件产品', paths: ['M4 7.5h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11ZM7 4h10M8 11.5h8M8 15.5h5'], accent: 'M20 3.5h.01' },
  partner: { label: '品牌合作', group: 'content', meaning: '了解图文内容和品牌展示的合作方式', paths: ['M13 7.5H6A2.5 2.5 0 0 0 3.5 10v7A2.5 2.5 0 0 0 6 19.5h7M11 4.5h7a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-7V4.5Z'], accent: 'M14.5 10.5h2' },
  external: { label: '前往外部网站', group: 'action', meaning: '离开新物，在新窗口打开其他网站', paths: ['M11 4.5H6A2.5 2.5 0 0 0 3.5 7v11A2.5 2.5 0 0 0 6 20.5h11a2.5 2.5 0 0 0 2.5-2.5v-5M12 12l8-8M15 4h5v5'] },
  download: { label: '导出资料', group: 'action', meaning: '将资料文件保存到当前设备', paths: ['M4 15v3a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 18v-3M12 3.5v11M8 11l4 4 4-4'] },
  save: { label: '保存草稿', group: 'action', meaning: '只在当前浏览器保存，不代表已经发送', paths: ['M15 3.5H6A2.5 2.5 0 0 0 3.5 6v12A2.5 2.5 0 0 0 6 20.5h12a2.5 2.5 0 0 0 2.5-2.5v-9L15 3.5ZM8 3.5v6h7v-6M8 20.5v-6h8v6'] },
  info: { label: '使用须知', group: 'content', meaning: '阅读需要留意的限制与说明', paths: ['M20.5 12a8.5 8.5 0 1 1-8.5-8.5M12 11v6'], accent: 'M12 7.5h.01' },
} satisfies Record<string, {label:string;group:string;meaning:string;paths:string[];accent?:string}>;
export type IconName = keyof typeof icons;
