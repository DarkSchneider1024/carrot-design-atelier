import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carrot-atelier.online"),
  title: "卡洛特工作室 | Carrot Studio - 專業網站與 App 製作",
  description: "卡洛特工作室 (Carrot Studio) 提供專業的網站架設、App 製作、遊戲開發服務。精選作品展示：Freezer Shop、FastOrder 與 PickUp。",
  keywords: "卡洛特工作室, Carrot Studio, 網站架設, App 製作, 遊戲製作, Freezer Shop, FastOrder, PickUp, 網頁設計, 數位轉型",
  authors: [{ name: "Carrot Studio" }],
  robots: "index, follow",
  openGraph: {
    title: "卡洛特工作室 | Carrot Studio - 專業網站與 App 製作",
    description: "專業網站架設、App 製作、遊戲開發服務。打造卓越的數位體驗。",
    url: "https://carrot-atelier.online",
    siteName: "Carrot Studio",
    images: [
      {
        url: "/images/gpt_logo.png",
        width: 800,
        height: 600,
        alt: "Carrot Studio Logo",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "卡洛特工作室 | Carrot Studio",
    description: "專業網站架設、App 製作、遊戲開發服務。",
    images: ["/images/gpt_logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <body className={`${outfit.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <LanguageProvider>
          <Header />
          <div style={{ flex: 1, paddingTop: '80px' }}>
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
