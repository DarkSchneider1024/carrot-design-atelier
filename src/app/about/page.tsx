'use client';

import React from 'react';
import Link from 'next/link';
import styles from './about.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

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
          <h1 className={`${styles.title} fade-in`}>{t.aboutHeroTitle}</h1>
          <p className={`${styles.aboutText} fade-in`} style={{ animationDelay: '0.05s' }}>
            {t.aboutText}
          </p>
          <p className={`${styles.description} fade-in`} style={{ animationDelay: '0.1s' }}>
            {t.aboutDesc}
          </p>
          <Link
            href="/links"
            className={`${styles.heroLink} fade-in`}
            style={{ animationDelay: '0.15s' }}
          >
            {t.servicesTitle} →
          </Link>
        </div>
      </section>
    </main>
  );
}
