import Image from "next/image";
import styles from "./page.module.css";
import Tags from "@/components/Tags";

export default function Home() {
  const technologies = ["HTML", "CSS", "JavaScript", "React", "Next.js"];
  
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>Delphine Nicolas-Etheve</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Développeur Web Full-Stack
        </p>
        <p className={styles.heroDescription}>
          Je crée des applications web modernes, performantes et accessibles
          avec React, Next.js et Node.js.
        </p>
        <div className={styles.tagContainer}>
          {technologies.map((techno) => (         
            <Tags key= {techno} technologie={techno} />
          ))}
          
        </div>
        <div className={styles.heroButtons}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
        </div>
      </div>
    </div>
  )
}