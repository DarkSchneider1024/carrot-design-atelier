'use client';

import Image from 'next/image';
import styles from './games.module.css';
import { featureIcons, gameIcons } from './icons';
import { useLanguage } from '@/context/LanguageContext';

const GAMES_URL = 'https://games.carrot-atelier.online/';

export default function GamesPage() {
  const { t } = useLanguage();
  const g = t.gamesPage;

  const isProd = process.env.NODE_ENV === 'production';
  const prefix =
    isProd && typeof window !== 'undefined' && window.location.hostname.includes('github.io')
      ? '/carrot-design-atelier'
      : '';

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={`${styles.badge} fade-in`}>{g.badge}</span>
            <h2 className={`${styles.enTitle} fade-in`} style={{ animationDelay: '0.1s' }}>
              {g.enTitle}
            </h2>
            <h1 className={`${styles.title} fade-in`} style={{ animationDelay: '0.2s' }}>
              {g.title}
            </h1>
            <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: '0.3s' }}>
              {g.subtitle}
            </p>
            <p className={`${styles.description} fade-in`} style={{ animationDelay: '0.4s' }}>
              {g.description}
            </p>
            <a
              href={GAMES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaBtn} fade-in`}
              style={{ animationDelay: '0.5s' }}
            >
              {g.cta}
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </a>
            <p className={`${styles.ctaHint} fade-in`} style={{ animationDelay: '0.6s' }}>
              {g.ctaHint}
            </p>
          </div>
        </div>
      </section>

      {/* Preview, lifted over the hero seam */}
      <section className={styles.previewSection}>
        <div className="container">
          <a
            href={GAMES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.preview} fade-in`}
            style={{ animationDelay: '0.7s' }}
          >
            <Image
              src={`${prefix}/images/carrot_games.png`}
              alt={g.previewAlt}
              width={1200}
              height={697}
              className={styles.previewImage}
              priority
            />
          </a>
        </div>
      </section>

      {/* Game lineup */}
      <section className={styles.lineupSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{g.lineupTitle}</h2>
          <p className={styles.sectionSubtitle}>{g.lineupSubtitle}</p>

          <div className={styles.gameGrid}>
            {g.games.map((game, index) => {
              const Icon = gameIcons[index];
              return (
                <a
                  key={game.name}
                  href={GAMES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gameCard}
                >
                  <span className={styles.gameIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={styles.gameCategory}>{game.category}</span>
                  <h3 className={styles.gameName}>{game.name}</h3>
                  <p className={styles.gameDesc}>{game.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform features */}
      <section className={styles.featureSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{g.featuresTitle}</h2>
          <div className={styles.featureGrid}>
            {g.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={feature.title} className={styles.featureCard}>
                  <span className={styles.featureIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outro CTA */}
      <section className={styles.outroSection}>
        <div className="container">
          <div className={styles.outroBox}>
            <h2 className={styles.outroTitle}>{g.outroTitle}</h2>
            <p className={styles.outroDesc}>{g.outroDescription}</p>
            <a
              href={GAMES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              {g.outroCta}
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
