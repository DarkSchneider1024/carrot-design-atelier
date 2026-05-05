import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carrot-studio.com"),
  title: "卡洛特設計工坊 | Carrot Design Atelier - 專業網站與 App 製作",
  description: "卡洛特設計工坊 (Carrot Design Atelier) 提供專業的網站架設、App 製作、遊戲開發服務。精選作品展示：FastOrder 與 PickUp。",
  keywords: "卡洛特設計工坊, Carrot Design Atelier, 網站架設, App 製作, 遊戲製作, FastOrder, PickUp, 網頁設計, 數位轉型",
  authors: [{ name: "Carrot Design Atelier" }],
  robots: "index, follow",
  openGraph: {
    title: "卡洛特設計工坊 | Carrot Design Atelier - 專業網站與 App 製作",
    description: "專業網站架設、App 製作、遊戲開發服務。打造卓越的數位體驗。",
    url: "https://carrot-studio.com",
    siteName: "Carrot Design Atelier",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Carrot Design Atelier Logo",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "卡洛特設計工坊 | Carrot Design Atelier",
    description: "專業網站架設、App 製作、遊戲開發服務。",
    images: ["/images/logo.png"],
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
      <body className={`${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}


