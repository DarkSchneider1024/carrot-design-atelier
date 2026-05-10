'use client';

import React from 'react';
import styles from './links.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function LinksPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.linksService1.split(' — ')[0],
      desc: t.linksService1.split(' — ')[1]
    },
    {
      title: t.linksService2.split(' — ')[0],
      desc: t.linksService2.split(' — ')[1]
    },
    {
      title: t.linksService3.split(' — ')[0],
      desc: t.linksService3.split(' — ')[1]
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
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${styles.serviceCard} fade-in`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={styles.serviceDecorator}></div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={`${styles.contactBox} fade-in`} style={{ animationDelay: '0.6s' }}>
            <h2 className={styles.contactSlogan}>{t.linksContactSlogan}</h2>
            <p className={styles.contactDesc}>{t.linksContactDesc}</p>
            <a href="mailto:carrot771024@gmail.com" className={styles.contactBtn}>
              {t.contact}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
