'use client';

import React from 'react';
import styles from './links.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function LinksPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: '✨',
      title: t.serviceItems?.[0] || '創新網站設計',
      desc: '結合美學與技術，打造令人驚嘆的數位門面。'
    },
    {
      icon: '🚀',
      title: t.serviceItems?.[1] || '品牌數位轉型',
      desc: '助品牌在數位浪潮中脫穎而出，實現卓越增長。'
    },
    {
      icon: '🛠️',
      title: t.serviceItems?.[2] || '高效能全端開發',
      desc: '從後端架構到前端互動，追求極致性能與穩定。'
    },
    {
      icon: '🧠',
      title: t.serviceItems?.[3] || 'AI 驅動使用者體驗',
      desc: '導入最新 AI 技術，優化每一次的使用者互動。'
    }
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <video 
          className={styles.videoBackground}
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/carrot_design_atelier.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <h1 className={`${styles.slogan} fade-in`}>{t.linksHeroSlogan}</h1>
          <p className={`${styles.description} fade-in`} style={{ animationDelay: '0.2s' }}>
            {t.linksHeroDesc}
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t.servicesTitle}</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${styles.serviceCard} fade-in`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
