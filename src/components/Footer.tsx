'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Column 1: Brand */}
        <div className={styles.column}>
          <div className={styles.brandTitle}>CARROT STUDIO</div>
          <p className={styles.footerDesc}>{t.footerDesc}</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon} viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.14h-3v4.35h3v11.69h5V11.81h3.77l.5-4.35Z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon} viewBox="0 0 24 24">
                <path d="M12,0C5.37,0,0,5.37,0,12c0,5.08,3.16,9.43,7.63,11.2c-.1-.95-.2-2.39.04-3.42.22-.93,1.44-6.1,1.44-6.1s-.37-.73-.37-1.81c0-1.7,0.98-2.97,2.21-2.97,1.04,0,1.55.78,1.55,1.72,0,1.05-.67,2.62-1.01,4.07-.29,1.22.61,2.21,1.81,2.21,2.17,0,3.84-2.29,3.84-5.59,0-2.92-2.1-4.97-5.1-4.97-3.48,0-5.52,2.61-5.52,5.3,0,1.05.4,2.18.91,2.8.1.12.11.23.08.35-.09.37-.28,1.14-.32,1.29-.05.2-.16.24-.38.14-1.42-.66-2.31-2.73-2.31-4.4,0-3.58,2.6-6.87,7.5-6.87,3.94,0,7,2.81,7,6.56,0,3.91-2.47,7.07-5.89,7.07-1.15,0-2.23-.6-2.6-1.3l-.71,2.7c-.26.99-.95,2.23-1.41,2.98,1.12.35,2.3.54,3.53.54,6.63,0,12-5.37,12-12S18.63,0,12,0z"/>
              </svg>
            </a>
            <a href="https://page.line.biz/account-page/1946069720577103/profile" className={styles.socialIcon} aria-label="LINE" target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon} viewBox="0 0 24 24">
                <path d="M24,10.3c0-4.7-4.8-8.5-10.8-8.5S2.4,5.6,2.4,10.3c0,4.2,3.8,7.7,9,8.4c.3,0,.8.2.9.5c.1.3,0,.7-.1,1c-.2.6-.8,2.3-.9,2.5 c-.1.3,0,.6.2.7c.2.1.4,0,.7-.2c.2-.2,4.1-4.1,5.6-5.5c1.4-1.3,2.4-3.4,2.4-5.3h0z M8.3,13.2H6.2c-.3,0-.5-.2-.5-.5V7.6 c0-.3.2-.5.5-.5h0.4c.3,0,.5.2.5.5v4.7h1.1c.3,0,.5.2.5.5v0.4C8.8,13,8.6,13.2,8.3,13.2L8.3,13.2z M10.8,13.2h-0.4 c-.3,0-.5-.2-.5-.5V7.6c0-.3.2-.5.5-.5h0.4c.3,0,.5.2.5.5v5.1C11.3,13,11.1,13.2,10.8,13.2L10.8,13.2z M16.7,13.2h-2.1 c-.3,0-.5-.2-.5-.5V7.6c0-.3.2-.5.5-.5h0.4c.3,0,.5.2.5.5V11l1.1-1.1c.2-.2.4-.2.6,0l0,0c.2.2.2.4,0,0.6l-1.4,1.4l1.5,1.5 c.2.2.2.4,0,0.6l0,0c-.2.2-.4.2-.6,0L16.7,13.2z M20.9,13.2h-2.1c-.3,0-.5-.2-.5-.5V7.6c0-.3.2-.5.5-.5h2.1c.3,0,.5.2.5.5v0.4 c0,0.3-.2,0.5-.5,0.5h-1.6v1.1h1.6c.3,0,.5.2.5.5v0.4c0,0.3-.2,0.5-.5,0.5h-1.6V12h1.6c.3,0,.5.2.5.5v0.4 C21.4,13,21.2,13.2,20.9,13.2L20.9,13.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>{t.servicesTitle}</h4>
          <ul className={styles.linkList}>
            {t.serviceItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Sitemap */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>{t.sitemapTitle}</h4>
          <ul className={styles.linkList}>
            {t.sitemapItems.map((item: string, i: number) => {
              let href = "/";
              if (i === 0) href = "/#hero"; // About Us
              if (i === 1) href = "/#works"; // Featured Works
              if (i === 2) href = "/#hero"; // Service Items
              if (i === 3) href = "/contact"; // Contact Us
              
              return (
                <li key={i}>
                  <Link href={href} className={styles.footerLink}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>


        {/* Column 4: Contact */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>{t.contactTitle}</h4>
          <div className={styles.contactDetails}>
            <p className={styles.contactItem}><a href="tel:0963208318" className={styles.phoneLink}>0963-208-318</a></p>
            <p className={styles.contactItem}><a href={`mailto:${t.email}`} className={styles.emailLink}>{t.email}</a></p>
            <p className={styles.contactItem}>{t.address}</p>
            <p className={styles.contactItem}>{t.officeHours}</p>
            <p className={styles.contactItem}>{t.closedDays}</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.copyright}>
          © {currentYear} 卡洛特工作室有限公司  {t.copyright}
        </div>
        <div className={styles.footerLinks}>
          <a href="#">隱私權政策</a>
          <span>|</span>
          <span>Designed by Carrot Studio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
