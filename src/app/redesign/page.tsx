'use client';

import React from 'react';
import styles from './redesign.module.css';

export default function RedesignPage() {
  return (
    <div className={styles.container}>
      <div className={styles.bgSplit}></div>
      <div className={styles.content}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.mascotContainer}>
            <img 
              src="/images/gpt_logo.png" 
              alt="Carrot Studio Logo" 
              className="w-full h-full object-contain"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
            />
          </div>
          <div className={styles.tagline}>
            CREATIVE TECH STUDIO
          </div>
        </div>

        {/* Text Section */}
        <div className={styles.textSection}>
          <h2 className={styles.enTitle}>CARROT STUDIO</h2>
          <h1 className={styles.chTitle}>卡洛特工作室</h1>
          <div className={styles.subTitle}>
            網站架設 / APP製作 / 遊戲製作
          </div>
        </div>
      </div>
    </div>
  );
}
