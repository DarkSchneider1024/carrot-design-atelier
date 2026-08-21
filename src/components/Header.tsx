'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const navItems = [
    { href: '/', label: t.navHome },
    { href: '/about', label: t.navAbout },
    { href: '/links', label: t.navServices },
    { href: '/games', label: t.navGames },
    { href: 'https://web3-0-game.vercel.app/', label: t.navWeb3, external: true },
    { href: 'https://daily-mate.carrot-atelier.online/', label: t.navShop, external: true },
    { href: '/articles', label: t.navArticles },
    { href: '/contact', label: t.contact },
  ];

  return (
    <header className={`
      ${styles.header}
      ${scrolled ? styles.scrolled : ''}
      ${!visible ? styles.hidden : ''}
      ${menuOpen ? styles.menuOpen : ''}
    `}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>CARROT</span>
          <span className={styles.logoDot}>.</span>
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
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
