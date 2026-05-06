'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const isProd = process.env.NODE_ENV === "production";
  
  // Try to detect if we are on a custom domain by checking if the base path is likely present
  // In many cases, it's safer to just check if we're on GitHub Pages subpath environment
  const prefix = isProd && typeof window !== 'undefined' && window.location.hostname.includes('github.io') 
    ? "/carrot-design-atelier" 
    : "";

  const projects = [
    {
      title: t.waferBI.title,
      description: t.waferBI.description,
      image: `${prefix}/images/hero_bg.png`, // Placeholder image
      link: "https://wafer.carrot-atelier.online/",
      tags: ["K8S", "Delta Lake"]
    },
    {
      title: t.fastOrder.title,
      description: t.fastOrder.description,
      image: `${prefix}/images/fastorder.png`,
      link: "https://fast-order-beige.vercel.app/",
      tags: ["Next.js", "Ordering System"]
    },
    {
      title: t.pickUp.title,
      description: t.pickUp.description,
      image: `${prefix}/images/pickup.png`,
      link: "https://pick-up-jade.vercel.app/",
      tags: ["E-commerce", "BI Reports"]
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section - Redesigned */}
      <section className={styles.heroSection}>
        <div className={styles.bgSplit}></div>
        <div className={styles.heroContent}>
          <div className={styles.logoSide}>
            <div className={styles.mascotContainer}>
              <Image 
                src={`${prefix}/images/gpt_logo.png`} 
                alt="Carrot Studio Logo" 
                width={300}
                height={400}
                className={styles.mascotImage}
                priority
              />
            </div>
            <div className={styles.tagline}>
              {t.tagline}
            </div>
          </div>

          <div className={styles.textSide}>
            <h2 className={styles.enTitle}>{t.heroTitle}</h2>
            <h1 className={styles.chTitle}>{t.heroChTitle}</h1>
            <p className={styles.services}>{t.services}</p>
          </div>
        </div>
      </section>


      {/* Works Section */}
      <section className={styles.worksSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t.showcaseTitle}</h2>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  {project.tags && project.tags.length > 0 && (
                    <div className={styles.tags}>
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.cardLink}
                  >
                    {t.viewWork}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}

