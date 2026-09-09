'use client';

import Link from 'next/link';
import styles from './articles.module.css';
import { useLanguage } from '@/context/LanguageContext';

const SERIES_URL = 'https://ithelp.ithome.com.tw/users/20182549/ironman/9124';
const WAFER_BI_URL = 'https://wafer.carrot-atelier.online/';
const WEB_TUTORIAL_URL = 'https://darkschneider1024.github.io/vue-studying/';

/**
 * 2026 iThome 鐵人賽系列文，30 天已完賽（Day 1 ~ Day 30）。
 * 依 Day 由新到舊排序；文章標題維持中文原文（iThome 上的原始標題）。
 */
const ironmanArticles = [
  {
    day: 30,
    date: '2026-09-01',
    title: '完賽感言：技術成長、架構反思與未來展望',
    summary: '回顧這 30 天做了什麼、學到什麼。',
    url: 'https://ithelp.ithome.com.tw/articles/10406566',
  },
  {
    day: 29,
    date: '2026-08-31',
    title: '實戰排除：當 Pod 頻繁重啟 (CrashLoopBackOff) 時該如何排查',
    summary: '一步一步走過真實的除錯流程，而不是背口訣。',
    url: 'https://ithelp.ithome.com.tw/articles/10406359',
  },
  {
    day: 28,
    date: '2026-08-30',
    title: '效能調優：JVM 與 Python 容器的資源限制與優化',
    summary: '針對異構語言特性，調整 K8S 資源分配以達到最佳效能。',
    url: 'https://ithelp.ithome.com.tw/articles/10406060',
  },
  {
    day: 27,
    date: '2026-08-29',
    title: '災難恢復：K8S 叢集備份與數據復原策略',
    summary: '面對最壞的情況，我們如何快速重建整套 BI 平台。',
    url: 'https://ithelp.ithome.com.tw/articles/10405878',
  },
  {
    day: 26,
    date: '2026-08-28',
    title: '資料庫演進：在 K8S 上使用 Liquibase 管理 DB 遷移',
    summary: '自動化更新資料庫 Schema，告別手動執行 SQL 的風險。',
    url: 'https://ithelp.ithome.com.tw/articles/10405640',
  },
  {
    day: 25,
    date: '2026-08-27',
    title: '彈性伸縮：根據負載自動擴展 (HPA) 的實戰配置',
    summary: '讓叢集在高峰期自動增加副本，離峰期自動縮減省錢。',
    url: 'https://ithelp.ithome.com.tw/articles/10405423',
  },
  {
    day: 24,
    date: '2026-08-26',
    title: '分布式追蹤 (Distributed Tracing)：使用 OpenTelemetry 洞察微服務間的流轉',
    summary: '深入學習 OTel 與 Jaeger 的完整請求鏈路。',
    url: 'https://ithelp.ithome.com.tw/articles/10405237',
  },
  {
    day: 23,
    date: '2026-08-25',
    title: '監控體系 (二)：設計 Wafer BI 專屬的監控 Dashboard',
    summary: '將技術指標轉化為直觀的圖表，快速掌握健康度。',
    url: 'https://ithelp.ithome.com.tw/articles/10405030',
  },
  {
    day: 22,
    date: '2026-08-24',
    title: '監控體系 (一)：Prometheus 與 Grafana 的架構與安裝',
    summary: '建立系統的靈魂之窗，觀測所有資源指標。',
    url: 'https://ithelp.ithome.com.tw/articles/10404775',
  },
  {
    day: 21,
    date: '2026-08-23',
    title: '供應鏈安全：鏡像掃描 (Image Scanning) 與漏洞管理',
    summary: '在 Image 進入叢集前，先抓出潛在的安全漏洞。',
    url: 'https://ithelp.ithome.com.tw/articles/10404511',
  },
  {
    day: 20,
    date: '2026-08-22',
    title: '部署策略：滾動更新、回滾與金絲雀發布',
    summary: '從 Deployment 內建的滾動更新，到 Argo Rollouts 的金絲雀，以及出事時到底該怎麼退回去。',
    url: 'https://ithelp.ithome.com.tw/articles/10404458',
  },
  {
    day: 19,
    date: '2026-08-21',
    title: '流水線串接：實現代碼推送即部署的自動化閉環',
    summary: '打通從 Commit 到 K8S 生產環境的最後一哩路。',
    url: 'https://ithelp.ithome.com.tw/articles/10404156',
  },
  {
    day: 18,
    date: '2026-08-20',
    title: 'ArgoCD 實戰：安裝與設定 GitOps 中心',
    summary: '實戰安裝 ArgoCD 並與 GitHub 建立安全連結。',
    url: 'https://ithelp.ithome.com.tw/articles/10403966',
  },
  {
    day: 17,
    date: '2026-08-19',
    title: 'GitOps 降臨：為什麼我們需要 ArgoCD？',
    summary: '從「推動式」轉向「聲明式」，順便看清它跟 CI 的分工。',
    url: 'https://ithelp.ithome.com.tw/articles/10403776',
  },
  {
    day: 16,
    date: '2026-08-18',
    title: 'CI/CD 自動化 (二)：多架構 (Multi-Arch) Docker Image 構建',
    summary: '支援 ARM 與 AMD64，讓 Image 在各種節點都能跑。',
    url: 'https://ithelp.ithome.com.tw/articles/10403634',
  },
  {
    day: 15,
    date: '2026-08-17',
    title: 'CI/CD 自動化 (一)：GitHub Actions 基礎流程與測試自動化',
    summary: '建立代碼推送後的第一道防線，確保品質不退化。',
    url: 'https://ithelp.ithome.com.tw/articles/10403404',
  },
  {
    day: 14,
    date: '2026-08-16',
    title: '自癒能力：Liveness 與 Readiness Probes 的設計思維',
    summary: '讓 K8S 知道何時該重啟服務，何時該引導流量。',
    url: 'https://ithelp.ithome.com.tw/articles/10403233',
  },
  {
    day: 13,
    date: '2026-08-15',
    title: '配置管理：Secrets 與 ConfigMaps 的安全實踐',
    summary: '將敏感資訊與環境變數從代碼中抽離，實現安全管理。',
    url: 'https://ithelp.ithome.com.tw/articles/10403108',
  },
  {
    day: 12,
    date: '2026-08-14',
    title: '持久化存儲：在 K8S 上管理 Delta Lake 數據存儲 (PV/PVC)',
    summary: '解決資料庫與數據文件在容器重啟後的丟失問題。',
    url: 'https://ithelp.ithome.com.tw/articles/10402873',
  },
  {
    day: 11,
    date: '2026-08-13',
    title: '流量控制：Nginx Ingress Controller 與 SSL 憑證設定',
    summary: '讓外部流量安全、精準地導向正確的微服務。',
    url: 'https://ithelp.ithome.com.tw/articles/10402688',
  },
  {
    day: 10,
    date: '2026-08-12',
    title: 'Helm 管理：如何優雅地管理多服務的部署文件',
    summary: '使用變數與 Template，告別 YAML 地獄。',
    url: 'https://ithelp.ithome.com.tw/articles/10402564',
  },
  {
    day: 9,
    date: '2026-08-11',
    title: '雲端評估：Always Free 額度的真實限制，以及我們決定先留在本機的理由',
    summary: '免費不等於沒有代價，這篇記錄一次評估雲端部署、最後決定暫緩的完整過程。',
    url: 'https://ithelp.ithome.com.tw/articles/10402438',
  },
  {
    day: 8,
    date: '2026-08-10',
    title: 'K8S 入門：Deployment, Service 與 Namespace 的配置策略',
    summary: '建立 K8S 基礎資源，規劃服務間的通訊路徑。',
    url: 'https://ithelp.ithome.com.tw/articles/10402292',
  },
  {
    day: 7,
    date: '2026-08-09',
    title: '本地開發：使用 Docker Compose 模擬微服務環境',
    summary: '在開發機上一鍵啟動整套異構系統的技巧。',
    url: 'https://ithelp.ithome.com.tw/articles/10402127',
  },
  {
    day: 6,
    date: '2026-08-08',
    title: '安全防護：API Gateway 路由設計與 JWT 統一認證機制',
    summary: '設計微服務的門戶，實現無狀態的安全認證。',
    url: 'https://ithelp.ithome.com.tw/articles/10402107',
  },
  {
    day: 5,
    date: '2026-08-07',
    title: '前端視覺化：React + Echarts 的極致呈現',
    summary: '如何流暢地在前端渲染數萬個數據點的晶圓地圖。',
    url: 'https://ithelp.ithome.com.tw/articles/10401843',
  },
  {
    day: 4,
    date: '2026-08-06',
    title: '容器化實踐 (二)：Python FastAPI 與 Delta Lake 的大數據容器配置',
    summary: '在 Python 容器中處理大數據存儲與 ACID 特性。',
    url: 'https://ithelp.ithome.com.tw/articles/10401724',
  },
  {
    day: 3,
    date: '2026-08-05',
    title: '容器化實踐 (一)：Spring Boot 3 的 Docker 化與最佳化',
    summary: '從多階段構建到 JVM 參數，優化 Java 容器體質。',
    url: 'https://ithelp.ithome.com.tw/articles/10401601',
  },
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

/**
 * 完賽後改用主題分章呈現，取代單純的 30 篇流水帳。
 * 章節標題與說明放在 dictionary（要翻譯），這裡只留與語言無關的 Day 區間。
 * 區間必須連續覆蓋 Day 1 ~ 30，且順序要對應 dictionary 的 chapters 陣列。
 */
const chapterRanges = [
  { from: 1, to: 7 },
  { from: 8, to: 14 },
  { from: 15, to: 20 },
  { from: 21, to: 24 },
  { from: 25, to: 30 },
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
            <h2 className={`${styles.enTitle} fade-in`} style={{ animationDelay: '0.05s' }}>
              {a.enTitle}
            </h2>
            <h1 className={`${styles.title} fade-in`} style={{ animationDelay: '0.1s' }}>
              {a.title}
            </h1>
            <p className={`${styles.description} fade-in`} style={{ animationDelay: '0.15s' }}>
              {a.description}
            </p>
          </div>
        </div>
      </section>

      {/* Platform Highlight - Web Dev Tutorial */}
      <section className={styles.platformSection}>
        <div className="container">
          <div className={styles.platformCard}>
            <div className={styles.platformGrid}>
              <div className={styles.platformVisual}>
                <a
                  href={WEB_TUTORIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformImgLink}
                  aria-label="Visit Web Dev Learning Platform"
                >
                  <img
                    src="/images/web_tutorial_jimmy.png"
                    alt="網頁製作教學網站預覽畫面"
                    className={styles.platformImg}
                  />
                  <div className={styles.platformOverlay}>
                    <span className={styles.platformOverlayBtn}>點擊前往互動平台 ↗</span>
                  </div>
                </a>
              </div>
              <div className={styles.platformInfo}>
                <div className={styles.platformBadges}>
                  <span className={styles.platformBadge}>{(a as any).platformBadge || '原創開源平台'}</span>
                  <span className={styles.platformSubBadge}>48 門實戰單元</span>
                  <span className={styles.platformSubBadge}>免安裝即時演練</span>
                </div>
                <h2 className={styles.platformTitle}>{(a as any).platformTitle || '網頁製作教學網站'}</h2>
                <p className={styles.platformDesc}>{(a as any).platformDesc || '專為現代網頁開發者設計的互動式學習平台。涵蓋 HTML5、CSS3、JavaScript ES6+ 與 Vue 3 核心技術，內建 48 門單元即時演練台、RWD 響應式佈局教學與技術專有名詞字典，免安裝環境打開瀏覽器即可邊學邊練！'}</p>
                
                <ul className={styles.platformFeatures}>
                  <li>
                    <strong>⚡ 免安裝即開即練：</strong>純前端即時編譯，即時預覽 HTML/CSS/JS 與 Vue 3 成果
                  </li>
                  <li>
                    <strong>📱 完整 RWD 響應式攻略：</strong>專題剖析 Flexbox、Grid、Clamp 與行動裝置適配技巧
                  </li>
                  <li>
                    <strong>📖 內建工程名詞字典：</strong>隨查隨用前端核心術語與實戰解答比對
                  </li>
                </ul>

                <div className={styles.platformActions}>
                  <a
                    href={WEB_TUTORIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.platformPrimaryBtn}
                  >
                    {(a as any).platformCta || '前往網頁製作教學網站 →'}
                  </a>
                  <a
                    href="https://github.com/DarkSchneider1024/vue-studying"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.platformSecondaryBtn}
                  >
                    GitHub 開源專案 ↗
                  </a>
                </div>
              </div>
            </div>
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

      {/* Article list — grouped into chapters */}
      <section className={styles.listSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{a.listTitle}</h2>
          <p className={styles.listIntro}>{a.listIntro}</p>

          <div className={styles.chapters}>
            {chapterRanges.map((range, index) => {
              const chapter = a.chapters[index];
              const articles = ironmanArticles
                .filter((article) => article.day >= range.from && article.day <= range.to)
                .sort((x, y) => x.day - y.day);

              return (
                <section key={chapter.title} className={styles.chapter}>
                  <header className={styles.chapterHead}>
                    <span className={styles.chapterIndex}>
                      CHAPTER {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                    <span className={styles.chapterRange}>
                      DAY {range.from} – {range.to}
                    </span>
                  </header>
                  <p className={styles.chapterDesc}>{chapter.description}</p>

                  <ul className={styles.articleList}>
                    {articles.map((article) => (
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
                            <h4 className={styles.articleTitle}>{article.title}</h4>
                            <p className={styles.articleSummary}>{article.summary}</p>
                          </div>
                          <div className={styles.articleMeta}>
                            <time className={styles.articleDate} dateTime={article.date}>
                              {article.date}
                            </time>
                            <span className={styles.articleArrow} aria-hidden="true">
                              →
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
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
