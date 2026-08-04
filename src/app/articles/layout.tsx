import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '技術文章 | Carrot Studio',
  description:
    '卡洛特工作室參加 2026 iThome 鐵人賽的系列文：從零到一，使用 K8S + GitOps 打造異構技術棧的資料分析平台，完整記錄 Wafer BI 的製作歷程。',
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
