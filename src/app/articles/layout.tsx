import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '技術分享 | Carrot Studio',
  description:
    '卡洛特工作室技術分享：包含原創「網頁製作教學網站」前端互動實戰平台，以及 2026 iThome 鐵人賽 K8S + GitOps 資料分析平台系列文。',
  alternates: {
    canonical: '/articles',
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
