export const translations = {
  en: {
    title: "Carrot Studio | Professional Website & App Development",
    description: "Carrot Studio provides professional website construction, App production, and game development services. Featured works: FastOrder and PickUp.",
    heroTitle: "CARROT STUDIO",
    heroChTitle: "Carrot Studio",
    tagline: "CREATIVE TECH STUDIO",
    services: "Web Design / App Development / Game Development",
    showcaseTitle: "Featured Works Showcase",
    viewWork: "View Work →",
    copyright: "All Rights Reserved.",
    fastOrder: {
      title: "FastOrder - Smart Ordering System",
      description: "A modern ordering platform designed for restaurants and group buying, providing a smooth user experience and powerful backend management. Supports multiple payment methods and real-time order tracking."
    },
    pickUp: {
      title: "PickUp - Shopping Website",
      description: "A system designed specifically for e-commerce stores. Streamlines processes, optimizes management, and provides professional data analysis reports."
    },
    switchLang: "中文",
    contact: "Contact Us",
    contactLine: "LINE ID",
    contactPhone: "Phone",
    footerDesc: "Planting seeds of creativity within the pulse of every code. Tracing the soul of your brand through the language of design. We don't just build digital products; we weave stories of warmth into an infinite digital world.",
    servicesTitle: "Services",
    sitemapTitle: "Sitemap",
    contactTitle: "Contact Information",
    address: "101, Section 5, Xinyi Rd, Taipei City (Xinyi District)",
    officeHours: "Mon-Fri AM 09:00 ~ PM 18:00",
    closedDays: "Sat-Sun Closed",
    serviceItems: ["Web Construction", "App Development", "Game Production", "UI/UX Design", "SEO Optimization"],
    sitemapItems: ["About Us", "Featured Works", "Service Items", "Contact Us"]
  },
  zh: {
    title: "卡洛特工作室 | Carrot Studio - 專業網站與 App 製作",
    description: "卡洛特工作室 (Carrot Studio) 提供專業的網站架設、App 製作、遊戲開發服務。精選作品展示：FastOrder 與 PickUp。",
    heroTitle: "CARROT STUDIO",
    heroChTitle: "卡洛特工作室",
    tagline: "CREATIVE TECH STUDIO",
    services: "網站架設 / App製作 / 遊戲製作",
    showcaseTitle: "精選作品 Showcase",
    viewWork: "查看作品 →",
    copyright: "版權所有。",
    fastOrder: {
      title: "FastOrder - 智能點餐系統",
      description: "為餐廳與團購設計的現代化點餐平台，提供流暢的用戶體驗與強大的後台管理功能。支持多種支付方式與實時訂單追蹤。"
    },
    pickUp: {
      title: "PickUp - 購物網站",
      description: "專為電子商務門市設計的系統。簡化流程，優化管理，並提供專業的數據分析報表。"
    },
    switchLang: "English",
    contact: "聯繫我們",
    contactLine: "LINE ID",
    contactPhone: "行動電話",
    footerDesc: "在程式的脈絡裡，植入創意的種子。\n用設計的語言，勾勒品牌的靈魂。\n我們不只打造數位產品，\n更在無限的代碼中，為您寫下溫度的故事。",
    servicesTitle: "服務項目",
    sitemapTitle: "網站地圖",
    contactTitle: "聯絡資訊",
    address: "台北市信義區信義路五段7號 (台北101)",
    officeHours: "週一至週五 AM 09:00 ~ PM 18:00",
    closedDays: "週六、週日公休",
    serviceItems: ["形象網站設計", "購物網站建置", "APP 客製開發", "UI/UX 介面設計", "SEO 搜尋優化"],
    sitemapItems: ["關於我們", "精選作品", "服務項目", "聯絡我們"]
  }
};

export type Locale = "en" | "zh";
export type TranslationKey = keyof typeof translations.en;
