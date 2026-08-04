'use client';

import Link from 'next/link';
import styles from './articles.module.css';
import { useLanguage } from '@/context/LanguageContext';

const SERIES_URL = 'https://ithelp.ithome.com.tw/users/20182549/ironman/9124';
const WAFER_BI_URL = 'https://wafer.carrot-atelier.online/';

/**
 * 2026 iThome 鐵人賽系列文。新的一天發布後，在陣列最前面補一筆即可。
 * 文章標題維持中文原文（iThome 上的原始標題）。
 */
const ironmanArticles = [
  {
    day: 2,
    date: '2026-08-04',
    title: '系統架構全覽：Java + Python + React 的異構方案',
    summary: '解析異構技術棧如何截長補短，打造高效分析平台。',
    url: 'https://ithelp.ithome.com.tw/articles/10401414',
  },
  {
    day: 1,
    date: '2026-08-03',
    title: '前言：為什麼要選這個題目？專案背景與願景',
    summary: '說明 Wafer BI 專案的背景、異構技術選型考量，以及這系列 30 天的整體規劃。',
    url: 'https://ithelp.ithome.com.tw/articles/10401167',
  },
];

export default function ArticlesPage() {
  const { t } = useLanguage();
  const a = t.articlesPage;

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={`${styles.badge} fade-in`}>{a.badge}</span>
            <h2 className={`${styles.enTitle} fade-in`} style={{ animationDelay: '0.1s' }}>
              {a.enTitle}
            </h2>
            <h1 className={`${styles.title} fade-in`} style={{ animationDelay: '0.2s' }}>
              {a.title}
            </h1>
            <p className={`${styles.description} fade-in`} style={{ animationDelay: '0.3s' }}>
              {a.description}
            </p>
          </div>
        </div>
      </section>

      {/* Series overview */}
      <section className={styles.seriesSection}>
        <div className="container">
          <div className={styles.seriesCard}>
            <div className={styles.seriesMeta}>
              <span className={styles.seriesTag}>iThome</span>
              <span className={styles.seriesStatus}>{a.seriesStatus}</span>
            </div>
            <h2 className={styles.seriesTitle}>{a.seriesTitle}</h2>
            <p className={styles.seriesDesc}>{a.seriesDescription}</p>
            <p className={styles.seriesAuthor}>{a.seriesAuthor}</p>
            <a
              href={SERIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seriesLink}
            >
              {a.viewSeries}
            </a>
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className={styles.listSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{a.listTitle}</h2>
          <ul className={styles.articleList}>
            {ironmanArticles.map((article) => (
              <li key={article.day}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.articleCard}
                >
                  <div className={styles.dayBadge}>
                    <span className={styles.dayLabel}>DAY</span>
                    <span className={styles.dayNumber}>{article.day}</span>
                  </div>
                  <div className={styles.articleBody}>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleSummary}>{article.summary}</p>
                    <div className={styles.articleFooter}>
                      <time className={styles.articleDate} dateTime={article.date}>
                        {article.date}
                      </time>
                      <span className={styles.articleRead}>{a.readArticle}</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related project */}
      <section className={styles.relatedSection}>
        <div className="container">
          <div className={styles.relatedBox}>
            <h2 className={styles.relatedTitle}>{a.relatedTitle}</h2>
            <p className={styles.relatedDesc}>{a.relatedDescription}</p>
            <div className={styles.relatedActions}>
              <a
                href={WAFER_BI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.relatedBtn}
              >
                {a.relatedCta}
              </a>
              <Link href="/#works" className={styles.relatedLink}>
                {t.showcaseTitle}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
