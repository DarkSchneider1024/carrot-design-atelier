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
            <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#f6d365', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#b8860b', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="orange" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ff8e53', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ff4b2b', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Carrot Body - Balanced Proportions */}
              <path 
                d="M100,120 Q130,120 125,220 Q120,280 100,295 Q80,280 75,220 Q70,120 100,120" 
                fill="url(#orange)" 
              />
              {/* Texture stripes */}
              <path d="M85,160 Q100,165 115,160" stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.3" />
              <path d="M80,200 Q100,205 120,200" stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.3" />
              <path d="M88,240 Q100,245 112,240" stroke="#8b4513" strokeWidth="2" fill="none" opacity="0.3" />

              {/* Super Saiyan 3 Leaves/Hair */}
              <g fill="url(#gold)">
                {/* Central spiky leaves */}
                <path d="M100,130 Q110,60 140,40 Q115,65 115,110 Z" />
                <path d="M100,130 Q90,60 60,40 Q85,65 85,110 Z" />
                <path d="M100,130 Q100,20 120,5 Q110,50 110,120 Z" />
                <path d="M100,130 Q100,20 80,5 Q90,50 90,120 Z" />
                {/* Long flowing side hair */}
                <path d="M110,125 Q160,110 175,180 Q150,150 125,140 Z" />
                <path d="M90,125 Q40,110 25,180 Q50,150 75,140 Z" />
                {/* Accent spikes */}
                <path d="M100,130 Q130,100 150,80 Q120,100 110,120 Z" />
                <path d="M100,130 Q70,100 50,80 Q80,100 90,120 Z" />
              </g>
            </svg>
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
