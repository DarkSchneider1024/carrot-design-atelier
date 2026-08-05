import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於我們 | Carrot Design Atelier',
  description: '卡洛特工作室成立於 2026 年，致力於將數位技術與人文美學結合。提供網站架設、App 製作與遊戲製作等一站式數位服務。',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
