// Approved E family: original hardware stickers derived from the selected proposal.
export const categoryArt = {
  devices: {label:'全部硬件',src:'/images/icons-e/devices.webp'},
  glasses: {label:'智能眼镜',src:'/images/icons-e/glasses.webp'},
  recorder: {label:'录音与效率',src:'/images/icons-e/recorder.webp'},
  robot: {label:'陪伴机器人',src:'/images/icons-e/robot.webp'},
  handheld: {label:'随身 AI',src:'/images/icons-e/handheld.webp'},
} as const;
export type CategoryArtName = keyof typeof categoryArt;
