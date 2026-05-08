'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Header />
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{t.contact}</h1>
          <p className={styles.subtitle}>{t.footerDesc}</p>
        </div>
      </section>

      <section className={styles.formSection}>
        <ContactForm />
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.icon}>📍</div>
            <h3>{t.contactTitle}</h3>
            <p>{t.address}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.icon}>✉️</div>
            <h3>Email</h3>
            <p>{t.email}</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.icon}>🕒</div>
            <h3>{t.officeHours}</h3>
            <p>{t.closedDays}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
