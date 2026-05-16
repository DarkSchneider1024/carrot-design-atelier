'use client';

import React from 'react';
import ContactForm from '../../components/ContactForm';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} fade-in`}>{t.contactTitle}</h1>
          <p className={`${styles.desc} fade-in`} style={{ animationDelay: '0.2s' }}>
            {t.contactDesc}
          </p>
          <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
            {t.contactSubtitle}
          </p>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        <section className={styles.formSection}>
          <div className="container">
            <div className={styles.glassCard}>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className="container">
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.decorator}></div>
                <h3 className={styles.cardTitle}>Address</h3>
                <p className={styles.cardText}>{t.address}</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.decorator}></div>
                <h3 className={styles.cardTitle}>Digital</h3>
                <p className={styles.cardText}>{t.email}</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.decorator}></div>
                <h3 className={styles.cardTitle}>Existence</h3>
                <p className={styles.cardText}>{t.officeHours}</p>
                <p className={styles.cardText}>{t.closedDays}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
