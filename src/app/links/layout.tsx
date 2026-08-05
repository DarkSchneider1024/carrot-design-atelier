import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服務項目 | Carrot Design Atelier',
  description: '卡洛特工作室提供網站架設、App 製作與遊戲製作等一站式數位服務，從品牌形象到產品上線，企劃、設計與開發全程包辦。',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
