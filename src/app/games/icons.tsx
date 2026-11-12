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

// 卡洛特小鎮 — Town House & Flag
const TownIcon = () => (
  <svg {...base}>
    <path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20v-9.5z" />
    <path d="M9 21.5v-7a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v7" />
    <path d="M12 7.5v2.5" />
  </svg>
);

// 大老二 — 撲克黑桃2大牌
const BigTwoIcon = () => (
  <svg {...base}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 7.5h2.5a1.5 1.5 0 0 1 1.5 1.5c0 1-1.5 1.8-2.5 2.5l-1.5 1v.5h4" />
    <path d="M12 14.5c-.8 0-1.8.6-1.8 1.5 0 .8.8 1.5 1.8 2.2.9-.7 1.8-1.4 1.8-2.2 0-.9-1-1.5-1.8-1.5z" />
  </svg>
);

// 台灣16張麻將 — 麻將牌「中」
const MahjongIcon = () => (
  <svg {...base}>
    <rect x="5.5" y="3.5" width="13" height="17" rx="2" />
    <rect x="8.5" y="7.5" width="7" height="6" rx="0.5" />
    <path d="M12 5v12" />
  </svg>
);

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

// 水果極限闖關 — 蘋果與衝刺跑台
const FruitIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="13.5" r="7.5" />
    <path d="M12 6c0-2 1.5-3 2.5-3" />
    <path d="M11 3.5c1 0 2 1 2 2.5" />
    <path d="M4 21.5h16" />
  </svg>
);

// 炸彈人大作戰 — 經典炸彈火花
const BombermanIcon = () => (
  <svg {...base}>
    <circle cx="11" cy="13" r="7" />
    <path d="M15.5 8.5l3-3" />
    <path d="M18.5 5.5l.5-1.5 1.5.5-1 1.5z" />
    <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" />
  </svg>
);

// Features
const InstantPlayIcon = () => (
  <svg {...base}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const AiSparringIcon = () => (
  <svg {...base}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const OnlineRoomsIcon = () => (
  <svg {...base}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LobbyChatIcon = () => (
  <svg {...base}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const gameIcons = [
  TownIcon,
  BigTwoIcon,
  MahjongIcon,
  XiangqiIcon,
  TetrisIcon,
  PokerIcon,
  MagicFighterIcon,
  FruitIcon,
  BombermanIcon
];

export const featureIcons = [
  InstantPlayIcon,
  AiSparringIcon,
  OnlineRoomsIcon,
  LobbyChatIcon,
];
