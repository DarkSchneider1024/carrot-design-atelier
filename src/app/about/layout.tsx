import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於我們 | Carrot Design Atelier',
  description: '卡洛特工作室成立於 2026 年，致力於將數位技術與人文美學結合。我們相信，好的設計不應只是工具，而一種生活方式的延伸。',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
