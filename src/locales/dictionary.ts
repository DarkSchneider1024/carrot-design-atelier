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
    switchLang: "中文"
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
    switchLang: "English"
  }
};

export type Locale = "en" | "zh";
export type TranslationKey = keyof typeof translations.en;
