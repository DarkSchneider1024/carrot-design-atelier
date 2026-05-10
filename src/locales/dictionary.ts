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
    waferBI: {
      title: "Engineering BI Analysis Software",
      description: "Professional engineering business intelligence platform using K8S and Delta Lake for large-scale data analysis."
    },
    atelier: {
      title: "Carrot Studio - Branding Website",
      description: "The official branding website for Carrot Studio, showcasing a modern, responsive design and professional service portfolio."
    },
    switchLang: "中文",
    contact: "Contact Us",
    contactLine: "LINE ID",
    contactPhone: "Phone",
    email: "carrot771024@gmail.com",
    footerDesc: "Planting seeds of creativity within the pulse of every code. Tracing the soul of your brand through the language of design.",
    contactDesc: "Have a project in mind? We'd love to hear from you. Let's build something amazing together.",
    servicesTitle: "Services",
    sitemapTitle: "Sitemap",
    contactTitle: "Contact Information",
    address: "11F.-2, No. 65, Songde Rd., Xinyi Dist., Taipei City",
    officeHours: "Mon-Fri AM 09:00 ~ PM 18:00",
    closedDays: "Sat-Sun Closed",
    serviceItems: ["Web Construction", "App Development", "Game Production", "UI/UX Design", "SEO Optimization"],
    sitemapItems: ["About Us", "Featured Works", "Service Items", "Contact Us"],
    form: {
      name: "Your Name",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter your email",
      placeholderSubject: "What is this about?",
      placeholderMessage: "How can we help you?"
    },
    linksTitle: "Links | Carrot Design Atelier",
    linksHeroSlogan: "2026 Digital Aesthetic Pioneer",
    linksHeroDesc: "Founded in 2026, Carrot Design Atelier is dedicated to combining cutting-edge technology with artistic sensibility to create digital experiences that transcend the era."
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
    waferBI: {
      title: "工程 BI 分析軟體",
      description: "專業的工程商業智慧分析平台，運用 K8S 與 Delta Lake 技術，實現大規模數據分析與可視化。"
    },
    atelier: {
      title: "卡洛特工作室 - 形象官方網站",
      description: "為卡洛特工作室打造的官方形象網站。採用現代化設計語法，結合流暢的動畫與響應式佈局，完美呈現代言品牌的專業形象。"
    },
    switchLang: "English",
    contact: "聯絡我們",
    contactLine: "LINE ID",
    contactPhone: "行動電話",
    email: "carrot771024@gmail.com",
    footerDesc: "在程式的脈絡裡，植入創意的種子。\n用設計的語言，勾勒品牌的靈魂。",
    contactDesc: "有任何想法或專案需求嗎？歡迎與我們聯繫，讓我們一起打造卓越的數位體驗。",
    servicesTitle: "服務項目",
    sitemapTitle: "網站地圖",
    contactTitle: "聯絡資訊",
    address: "台北市信義區松德路65號11樓之2",
    officeHours: "週一至週五 AM 09:00 ~ PM 18:00",
    closedDays: "週六、週日公休",
    serviceItems: ["形象網站設計", "購物網站建置", "APP 客製開發", "UI/UX 介面設計", "SEO 搜尋優化"],
    sitemapItems: ["關於我們", "精選作品", "服務項目", "聯絡我們"],
    form: {
      name: "您的姓名",
      email: "電子郵件",
      subject: "主旨",
      message: "訊息內容",
      send: "送出訊息",
      sending: "傳送中...",
      success: "訊息已成功送出！",
      error: "傳送失敗，請稍後再試。",
      placeholderName: "請輸入您的姓名",
      placeholderEmail: "請輸入您的電子郵件",
      placeholderSubject: "請問關於什麼事？",
      placeholderMessage: "請描述您的需求或問題"
    },
    linksTitle: "相關連結 | Carrot Design Atelier",
    linksHeroSlogan: "2026 數位美學領航者",
    linksHeroDesc: "創立於 2026 年，Carrot Design Atelier 致力於將前衛科技與藝術感結合，為品牌打造超越時代的數位體驗。"
  }
};


export type Locale = "en" | "zh";
export type TranslationKey = keyof typeof translations.en;
