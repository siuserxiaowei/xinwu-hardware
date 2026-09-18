// Original Xinwu category illustrations. Shared material, lighting and proportions;
// these depict categories, not the design of any particular commercial product.
export const categoryArt = {
  devices: { label: '全部硬件', colors: ['#eef0e9', '#b8c6b5'], description: '四个小物件，组成可以慢慢探索的硬件陈列架。', body: `
    <g transform="rotate(-8 80 80)" filter="url(#shadow)">
      <rect x="34" y="35" width="40" height="40" rx="12" fill="url(#shell)"/>
      <path d="M43 54h9v5a4.5 4.5 0 0 1-9 0zm15 0h9v5a4.5 4.5 0 0 1-9 0m-6 2h6" fill="none" stroke="#475549" stroke-width="3"/>
      <rect x="86" y="35" width="40" height="40" rx="12" fill="#e66b45"/>
      <path d="M97 52v8m7-14v20m7-15v10m7-7v4" stroke="#fff5dc" stroke-width="3" stroke-linecap="round"/>
      <rect x="34" y="87" width="40" height="40" rx="12" fill="#394a3e"/>
      <rect x="42" y="96" width="24" height="18" rx="7" fill="#25322b"/>
      <path d="M49 102v5m10-5v5" stroke="#cdebb7" stroke-width="3" stroke-linecap="round"/>
      <rect x="86" y="87" width="40" height="40" rx="12" fill="url(#shell)"/>
      <rect x="94" y="94" width="24" height="17" rx="4" fill="#758e7e"/>
      <circle cx="106" cy="118" r="3" fill="#e76a43"/>
    </g>` },
  glasses: { label: '智能眼镜', colors: ['#f9e4d4', '#e5b49b'], description: '烟灰镜框、透亮镜片，一枚橙色的小提示灯。', body: `
    <g transform="rotate(-9 80 85)" filter="url(#shadow)" stroke-linejoin="round">
      <path d="m33 76 8-29q2-6 9-5l16 3m62 31-8-29q-2-6-9-5l-10 2" fill="none" stroke="#46524d" stroke-width="8" stroke-linecap="round"/>
      <path d="m34 75 8-26m85 26-8-26" fill="none" stroke="#829087" stroke-width="2" stroke-linecap="round"/>
      <path d="M25 76q21-8 47 0v18q-1 20-23 18-22-2-23-21zm63 0q23-8 47 0l-1 15q-1 20-23 21-22 2-23-18z" fill="url(#lens)" stroke="#35443e" stroke-width="7"/>
      <path d="M73 81q7-5 15 0" fill="none" stroke="#35443e" stroke-width="7"/>
      <path d="m34 83 10-3m52 3 11-3" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="3" stroke-linecap="round"/>
      <circle cx="126" cy="79" r="3" fill="#f77b4d"/>
    </g>` },
  recorder: { label: '录音与效率', colors: ['#eaf1e7', '#acc5b8'], description: '一块圆润的录音器，用声波说明它的用途。', body: `
    <g transform="rotate(10 80 80)" filter="url(#shadow)">
      <rect x="47" y="26" width="70" height="116" rx="20" fill="#90a497"/>
      <rect x="43" y="21" width="70" height="116" rx="20" fill="url(#shell)" stroke="#fff9e9"/>
      <rect x="59" y="35" width="38" height="5" rx="2.5" fill="#8c9a8f"/>
      <path d="M63 37h30" stroke="#536459" stroke-width="1.5" stroke-dasharray="1 3"/>
      <rect x="55" y="52" width="46" height="42" rx="10" fill="#dee6da"/>
      <path d="M63 70v8m8-16v24m8-18v12m8-22v30m7-18v8" fill="none" stroke="#627968" stroke-width="3" stroke-linecap="round"/>
      <circle cx="78" cy="115" r="10" fill="#cd522d"/>
      <circle cx="78" cy="113" r="9" fill="url(#orange)"/>
      <circle cx="75" cy="110" r="2" fill="#ffc1a0"/>
    </g>` },
  robot: { label: '陪伴机器人', colors: ['#f9efc9', '#e4cf88'], description: '圆润机身和一双发亮的眼睛，传达陪伴感。', body: `
    <g filter="url(#shadow)">
      <path d="M80 44V33" stroke="#a19672" stroke-width="6"/>
      <circle cx="80" cy="29" r="7" fill="url(#orange)"/>
      <rect x="49" y="119" width="23" height="16" rx="7" fill="#7c8774"/>
      <rect x="88" y="119" width="23" height="16" rx="7" fill="#7c8774"/>
      <rect x="26" y="72" width="15" height="30" rx="7.5" fill="#c7cab0"/>
      <rect x="119" y="72" width="15" height="30" rx="7.5" fill="#c7cab0"/>
      <rect x="35" y="44" width="90" height="82" rx="28" fill="url(#shell)" stroke="#fffae9" stroke-width="2"/>
      <rect x="45" y="60" width="70" height="48" rx="19" fill="url(#screen)"/>
      <path d="M64 78v10m32-10v10" stroke="#d6f6b7" stroke-width="7" stroke-linecap="round"/>
      <path d="M75 94q5 4 10 0" fill="none" stroke="#9bbaa0" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M54 66q9-4 18-3" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="3" stroke-linecap="round"/>
      <circle cx="80" cy="117" r="2.5" fill="#e7754e"/>
    </g>` },
  handheld: { label: '随身 AI', colors: ['#e8e9ee', '#b5bed0'], description: '掌心大小的橙色设备，把屏幕和实体按键留下。', body: `
    <g transform="rotate(-11 80 80)" filter="url(#shadow)">
      <rect x="48" y="25" width="72" height="118" rx="22" fill="#b7482e"/>
      <rect x="41" y="19" width="73" height="118" rx="22" fill="url(#orange)" stroke="#ffb38a"/>
      <rect x="50" y="32" width="55" height="66" rx="13" fill="url(#screen)" stroke="#aa5136"/>
      <path d="M58 68h6l5-13 8 25 8-29 7 17h5" fill="none" stroke="#e3f0c7" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M59 41h17" stroke="#fff" stroke-opacity=".18" stroke-width="3" stroke-linecap="round"/>
      <circle cx="78" cy="116" r="10" fill="#b84b2e"/>
      <circle cx="78" cy="114" r="9" fill="url(#shell)"/>
      <circle cx="97" cy="112" r="2" fill="#ffdbc0"/>
    </g>` },
} as const;

export type CategoryArtName = keyof typeof categoryArt;

export function categorySvg(name: CategoryArtName) {
  const art = categoryArt[name];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><title>新物 · ${art.label}</title><defs>
    <linearGradient id="tile" x2=".7" y2="1"><stop stop-color="${art.colors[0]}"/><stop offset="1" stop-color="${art.colors[1]}"/></linearGradient>
    <linearGradient id="shell" x2=".8" y2="1"><stop stop-color="#fffef1"/><stop offset=".55" stop-color="#f2efda"/><stop offset="1" stop-color="#c8cdb9"/></linearGradient>
    <linearGradient id="orange" x2=".8" y2="1"><stop stop-color="#ffb074"/><stop offset=".45" stop-color="#f48150"/><stop offset="1" stop-color="#dc5934"/></linearGradient>
    <linearGradient id="screen" x2=".7" y2="1"><stop stop-color="#51645c"/><stop offset="1" stop-color="#202e2a"/></linearGradient>
    <linearGradient id="lens" x2=".7" y2="1"><stop stop-color="#d4e5db"/><stop offset=".55" stop-color="#97b5ad"/><stop offset="1" stop-color="#e6ddd0"/></linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="1" dy="7" stdDeviation="4" flood-color="#32402c" flood-opacity=".2"/></filter>
  </defs><rect x="1" y="1" width="158" height="158" rx="38" fill="url(#tile)"/><rect x="2" y="2" width="156" height="156" rx="37" fill="none" stroke="#fff" stroke-opacity=".55"/>${art.body}</svg>`;
}
