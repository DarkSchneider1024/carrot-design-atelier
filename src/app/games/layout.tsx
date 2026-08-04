import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '卡洛特遊戲網 | Carrot Studio',
  description:
    '卡洛特遊戲網（Carrot Games）是卡洛特工作室打造的純前端線上遊戲大廳。免下載即可遊玩中國象棋、俄羅斯方塊對戰、德州撲克與魔法對戰，支援 AI 陪練與好友連線。',
  alternates: {
    canonical: '/games',
  },
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
