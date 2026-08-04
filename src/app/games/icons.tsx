import type { SVGProps } from 'react';

/**
 * Line icons for the games page, drawn in a single stroke style
 * (24x24 grid, currentColor, round caps) so they read as one set.
 * Order matches the `games` / `features` arrays in the dictionary.
 */
const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// 中國象棋 — two pieces facing off across the board line
const XiangqiIcon = () => (
  <svg {...base}>
    <circle cx="8" cy="9.5" r="5" />
    <circle cx="8" cy="9.5" r="2.25" />
    <circle cx="16.5" cy="15" r="5" />
    <path d="M3 20.5h18" />
  </svg>
);

// 俄羅斯方塊 — a T tetromino
const TetrisIcon = () => (
  <svg {...base}>
    <rect x="3.5" y="5.5" width="5.5" height="5.5" rx="1" />
    <rect x="9.25" y="5.5" width="5.5" height="5.5" rx="1" />
    <rect x="15" y="5.5" width="5.5" height="5.5" rx="1" />
    <rect x="9.25" y="11.25" width="5.5" height="5.5" rx="1" />
  </svg>
);

// 德州撲克 — a card in hand
const PokerIcon = () => (
  <svg {...base}>
    <rect x="8.5" y="3" width="11.5" height="16" rx="2" />
    <path d="M13.5 21H6a2 2 0 0 1-2-2V7" />
    <path d="M14.25 14s-3.25-2.1-3.25-4.2a1.85 1.85 0 0 1 3.25-1.15A1.85 1.85 0 0 1 17.5 9.8c0 2.1-3.25 4.2-3.25 4.2z" />
  </svg>
);

// 魔法對戰 — a magic fighter craft
const MagicFighterIcon = () => (
  <svg {...base}>
    <path d="M11 2c2.4 2.6 3.75 6 3.75 9.5V15l2.25 2.25V20L13 18.5H9L5 20v-2.75L7.25 15v-3.5C7.25 8 8.6 4.6 11 2z" />
    <circle cx="11" cy="9.25" r="1.6" />
    <path d="M19 3.25l.65 1.6 1.6.65-1.6.65L19 7.75l-.65-1.6-1.6-.65 1.6-.65z" />
  </svg>
);

// 免安裝即開即玩
const InstantPlayIcon = () => (
  <svg {...base}>
    <path d="M13.5 2L4 13.75h6.5L10.5 22 20 10.25h-6.5z" />
  </svg>
);

// 智慧 AI 陪練
const AiSparringIcon = () => (
  <svg {...base}>
    <rect x="4" y="8" width="16" height="12" rx="3.5" />
    <path d="M12 4.5V8M9.25 13.25v1.75M14.75 13.25v1.75" />
    <circle cx="12" cy="3.25" r="1.25" />
  </svg>
);

// 即時連線開房
const OnlineRoomsIcon = () => (
  <svg {...base}>
    <circle cx="18" cy="5.25" r="2.75" />
    <circle cx="6" cy="12" r="2.75" />
    <circle cx="18" cy="18.75" r="2.75" />
    <path d="M8.4 10.65l7.2-4.05M8.4 13.35l7.2 4.05" />
  </svg>
);

// 大廳玩家頻道
const LobbyChatIcon = () => (
  <svg {...base}>
    <path d="M21 11.5a8.5 8.5 0 0 1-9.25 8.47 8.9 8.9 0 0 1-3.6-.97L3 20.75l1.75-4.15A8.5 8.5 0 0 1 12.5 3.02 8.5 8.5 0 0 1 21 11.5z" />
    <path d="M8.75 11.5h.01M12 11.5h.01M15.25 11.5h.01" />
  </svg>
);

export const gameIcons = [XiangqiIcon, TetrisIcon, PokerIcon, MagicFighterIcon];

export const featureIcons = [
  InstantPlayIcon,
  AiSparringIcon,
  OnlineRoomsIcon,
  LobbyChatIcon,
];
