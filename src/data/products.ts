export interface Product {
  slug: string; name: string; brand: string; category: string; categoryId: string;
  image: string; color: string; subtitle: string; description: string; tags: string[];
  source: string; scenes: [string, string][]; steps: string[]; questions: string[];
  facts: [string, string][];
}
export const categories = [
  { id: 'all', name: '全部硬件', icon: 'grid' },
  { id: 'glasses', name: '智能眼镜', icon: 'glasses' },
  { id: 'recorders', name: '录音与效率', icon: 'mic' },
  { id: 'robots', name: '陪伴机器人', icon: 'robot' },
  { id: 'assistants', name: '随身 AI', icon: 'spark' },
];
export const products: Product[] = [
  {
    slug: 'even-g1', name: 'Even G1', brand: 'EVEN REALITIES', category: '智能眼镜', categoryId: 'glasses',
    image: 'even-product', color: '#e9eae3', subtitle: '把提示，放进视线里。',
    description: '将提词、翻译和导航信息带到眼前的日常眼镜。它尝试让你在需要信息的时候，少一次低头看手机的动作。',
    tags: ['抬头显示', '提词与翻译'], source: 'https://www.evenrealities.com/g1',
    scenes: [['准备一次演讲', '官方提供提词功能。值得进一步体验的是：抬眼阅读是否自然，滚动节奏能否跟上表达。'], ['在陌生城市行走', '通过眼前的导航提示了解方向。路口提示是否及时，需要结合实际路线验证。'], ['跨语言交流', '将翻译文字显示在镜片中。不同口音、语速和噪声下的表现仍需实测。']],
    steps: ['安装 Even Realities 配套 App，完成眼镜与手机的连接。', '在 App 中配置需要的提词、翻译或导航功能。', '戴上眼镜，调整佩戴位置，在具体场景中查看提示。'],
    questions: ['有显示，不代表能替代手机；先确认自己经常使用的具体功能。', '配镜方案、手机兼容性和所在地区的服务支持需在购买前确认。', '续航、显示可读性与长时间佩戴感受，本站尚未实测。'],
    facts: [['产品形态', '带显示的智能眼镜'], ['配套软件', 'Even Realities App'], ['主要用途', '提词 / 翻译 / 导航'], ['购买与价格', '以品牌当前页面为准']],
  },
  {
    slug: 'plaud-note', name: 'Plaud Note', brand: 'PLAUD', category: '录音与效率', categoryId: 'recorders',
    image: 'plaud', color: '#edeae6', subtitle: '把对话，整理成有用的笔记。',
    description: '卡片形态的录音设备，配合软件完成转写和内容整理。适合从会议、访谈等日常工作场景认识这类产品。',
    tags: ['会议记录', 'AI 转写'], source: 'https://www.plaud.ai/products/plaud-note-ai-voice-recorder',
    scenes: [['开完会，再整理', '记录讨论后查看转写与摘要。尤其需要核对负责人、金额和截止时间有没有被记错。'], ['留住访谈内容', '保留录音供后续整理。多人轮流说话时的辨认效果，是比摘要长度更值得关注的项目。'], ['回顾一段灵感', '将口头想法保存下来，再整理为文字。使用前应了解转写额度和软件服务费用。']],
    steps: ['按照官方说明设置设备，并与 Plaud App 连接。', '在取得录音同意后，选择对应模式记录对话。', '同步录音，生成转写与摘要，再对照原音核查关键信息。'],
    questions: ['AI 摘要需要人工核查，不能把生成的待办事项直接当作会议结论。', '购买设备与购买转写服务是两项成本，需一起了解。', '本站还未验证噪声环境下的识别、多人区分和实际续航。'],
    facts: [['产品形态', '卡片式录音设备'], ['配套软件', 'Plaud App'], ['主要用途', '录音 / 转写 / 摘要'], ['使用成本', '需核对转写额度与套餐']],
  },
  {
    slug: 'emo', name: 'EMO', brand: 'LIVINGAI', category: '陪伴机器人', categoryId: 'robots',
    image: 'emo', color: '#e9eaf0', subtitle: '桌面上，多了一个小伙伴。',
    description: '以表情、动作和互动为特点的桌面机器人。关注它的人，往往更在意相处的趣味，而不只是能回答多少问题。',
    tags: ['桌面陪伴', '表情互动'], source: 'https://living.ai/emo/',
    scenes: [['工作间隙的互动', '观察它如何回应呼唤和触碰。动作与表情能否带来长期的新鲜感，需要持续体验。'], ['给桌面一点生气', '在桌面上与机器人相处。活动范围、声音和摆放空间都影响日常使用。'], ['认识实体交互', '通过可见动作理解人与设备如何交流。本站不将互动表情等同于真实情感。']],
    steps: ['根据官方指南完成设备、充电配件和 App 的初始设置。', '在平整、安全的桌面上预留活动空间。', '尝试说明书中支持的互动，观察响应与动作。'],
    questions: ['中文支持、联网要求及当前功能，购买前需向官方确认。', '短时间觉得可爱，与长时间愿意使用，是两件需要分别考察的事。', '桌边识别和长期运行表现尚未实测，不应据此省略看护。'],
    facts: [['产品形态', '桌面机器人'], ['品牌', 'LivingAI'], ['主要用途', '桌面互动与陪伴'], ['体验状态', '资料整理，尚未实测']],
  },
  {
    slug: 'rabbit-r1', name: 'rabbit r1', brand: 'RABBIT', category: '随身 AI', categoryId: 'assistants',
    image: 'rabbit', color: '#f5e6dc', subtitle: '给 AI，一个可以握住的形状。',
    description: '带有屏幕、摄像头与实体操作部件的随身 AI 设备。它提出了一个有趣的问题：哪些任务值得专门拿出另一台设备？',
    tags: ['语音交互', '口袋设备'], source: 'https://www.rabbit.tech/rabbit-r1',
    scenes: [['随手发起一次问答', '用实体设备发起请求。需要比较从拿起设备到获得可用答案的完整过程。'], ['对着现实世界提问', '围绕摄像头可见内容展开交互。识别结果的准确性需要用实际案例验证。'], ['体验不同的操作方式', '观察实体按钮和屏幕是否让操作更直接。适不适合自己，取决于常用任务。']],
    steps: ['根据官方指引激活设备并连接网络。', '使用当前系统支持的输入方式发起任务。', '核查输出，与手机完成同一任务的过程进行比较。'],
    questions: ['产品功能随软件变化，应以当前系统及官方说明为准。', '购买前确认所在地区的网络、账号与服务可用性。', '本站没有验证任务成功率，也不承诺它能够替代手机。'],
    facts: [['产品形态', '手持 AI 设备'], ['交互方式', '屏幕 / 摄像头 / 实体操作'], ['主要用途', '随身 AI 交互'], ['功能范围', '以当前软件版本为准']],
  },
  {
    slug: 'plaud-notepin', name: 'Plaud NotePin', brand: 'PLAUD', category: '录音与效率', categoryId: 'recorders',
    image: 'notepin', color: '#e9ece8', subtitle: '把记录，变成随身的小动作。',
    description: '可穿戴形态的录音设备，配合软件整理语音内容。与卡片式录音设备相比，它更值得关注的是佩戴和随手记录的体验。',
    tags: ['可穿戴录音', '灵感笔记'], source: 'https://www.plaud.ai/products/plaud-notepin',
    scenes: [['移动中的灵感', '把一闪而过的想法说下来。佩戴位置和触发录音的便利性值得实际体验。'], ['面对面的讨论', '记录交流内容后整理成笔记。远近声源对收音和识别的影响需要单独测试。'], ['回看一天的记录', '利用软件回顾语音内容。是否省时间，要把校对和整理所需时间一起算进去。']],
    steps: ['按照官方指南连接设备与 Plaud App。', '选择合适的佩戴方式，在取得同意后开始录音。', '将录音同步到软件，整理文字并核查关键内容。'],
    questions: ['随身佩戴不等于一直录音，具体操作与录音状态应按说明确认。', '了解免费额度、订阅成本和数据处理规则。', '本站尚未实测佩戴舒适度、误触和嘈杂环境下的录音效果。'],
    facts: [['产品形态', '可穿戴录音设备'], ['配套软件', 'Plaud App'], ['主要用途', '随身录音与内容整理'], ['使用成本', '需核对转写额度与套餐']],
  },
  {
    slug: 'loona', name: 'Loona Petbot', brand: 'KEYI TECH', category: '陪伴机器人', categoryId: 'robots',
    image: 'loona', color: '#ece8e1', subtitle: '会跑会互动的电子小伙伴。',
    description: '通过移动、表情和互动游戏与人交流的宠物机器人。理解它，可以从家里的空间、相处方式和日常玩法开始。',
    tags: ['宠物机器人', '移动互动'], source: 'https://keyirobot.com/products/petbot',
    scenes: [['在客厅一起玩', '官方提供互动游戏。家具、地毯与活动空间会怎样影响游戏，需要在家居环境中验证。'], ['用动作回应你', '观察它面对声音与互动时的反应。重复互动是否稳定，比单个精彩片段更能说明体验。'], ['探索机器人玩法', '通过配套 App 了解玩法。选择时应考虑自己愿意投入多少设置和学习时间。']],
    steps: ['完成充电，按照官方指南配置网络和配套 App。', '选择平整的地面，为设备留出活动空间。', '从基础互动开始，再探索当前版本支持的游戏。'],
    questions: ['不同版本、套装与配件可能不同，选购时需要核对。', '避障、地毯通过性和回充成功率，本站尚未实测。', '联网功能、语言支持和相关费用，需查看当前官方说明。'],
    facts: [['产品形态', '移动宠物机器人'], ['品牌', 'KEYI Tech'], ['主要用途', '互动游戏与陪伴'], ['选购注意', '核对版本与充电配件']],
  },
];
