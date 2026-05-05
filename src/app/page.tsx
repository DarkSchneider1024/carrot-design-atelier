import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const prefix = process.env.NODE_ENV === "production" ? "/carrot-design-atelier" : "";

  const projects = [
    {
      title: "FastOrder - 智能點餐系統",
      description: "為餐廳與團購設計的現代化點餐平台，提供流暢的用戶體驗與強大的後台管理功能。支持多種支付方式與實時訂單追蹤。",
      image: `${prefix}/images/fastorder.png`,
      link: "https://fast-order-beige.vercel.app/",
      tags: []
    },
    {
      title: "PickUp - 購物網站",
      description: "專為電子商務門市設計的系統。簡化流程，優化管理，並提供專業的數據分析報表。",

      image: `${prefix}/images/pickup.png`,
      link: "https://pick-up-jade.vercel.app/",
      tags: []
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            <Image 
              src={`${prefix}/images/logo.png`} 
              alt="Carrot Design Atelier Logo" 
              width={240} 
              height={240} 
              className={styles.logo}
              priority
            />
          </div>
          <div className={styles.brandName}>
            <h1 className={styles.brandMain}>CARROT</h1>
            <h2 className={styles.brandSub}>DESIGN ATELIER</h2>
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <h2 className={styles.studioTitle}>卡洛特設計工坊</h2>
          <p className={styles.services}>網站架設 / App製作 / 遊戲製作</p>
        </div>
      </section>


      {/* Works Section */}
      <section className={styles.worksSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>精選作品 Showcase</h2>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.cardLink}
                  >
                    查看作品 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: "4rem 0", 
        textAlign: "center", 
        backgroundColor: "var(--primary-dark)", 
        color: "var(--text-light)" 
      }}>
        <div className="container">
          <p>© 2026 卡洛特設計工坊 Carrot Design Atelier. All rights reserved.</p>
          <p style={{ marginTop: "1rem", opacity: 0.8, fontSize: "1.1rem", fontStyle: "italic", letterSpacing: "0.05em" }}>
            「將靈感鑄造成數位藝術，讓創意在代碼中優雅躍動。」
          </p>
        </div>
      </footer>


    </main>
  );
}
