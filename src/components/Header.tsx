'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold for styling
      setScrolled(currentScrollY > 50);

      // Show/Hide logic
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and passed threshold
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className={`
      ${styles.header} 
      ${scrolled ? styles.scrolled : ''} 
      ${!visible ? styles.hidden : ''}
    `}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>CARROT</span>
          <span className={styles.logoDot}>.</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/contact" className={styles.navLink}>
            {t.contact}
          </Link>
          <button 
            onClick={toggleLanguage} 
            className={styles.langBtn}
            aria-label="Toggle Language"
          >
            <span className={styles.langText}>{t.switchLang}</span>
            <svg className={styles.langIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

