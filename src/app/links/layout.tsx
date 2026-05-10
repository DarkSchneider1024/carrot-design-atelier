import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '相關連結 | Carrot Design Atelier',
  description: '創立於 2026 年，Carrot Design Atelier 致力於將前衛科技與藝術感結合，為品牌打造超越時代的數位體驗。',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
