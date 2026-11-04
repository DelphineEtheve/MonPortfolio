import styles from './page.module.css'
import projectsData from '@/data/projectsData.json'
import { notFound } from 'next/navigation' 

    export default async function ProjectDetail({ params }) {
  const { slug } = await params
  // Next.js passe automatiquement le slug dans params
  const projet = projectsData.find((project) => project.slug === slug)

  // Si le projet n'existe pas, afficher un message
  if (!projet) {
    notFound()
  }

  return (
      <div className={styles.container}>
          <div className={styles.header}>
              <h1 className={styles.title}>{projet.title}</h1>
              <p className={styles.longDescription}>{projet.longDescription}</p>
          </div>

          <div className={styles.content}>
              <div className={styles.imageWrapper}>
                   <img
                    className={styles.image}
                    src={projet.image}
                    alt={projet.title}
                    />

              </div>

              <div className={styles.details}>
                  <h2>Technologies utilisées</h2>
                  <div className={styles.technologies}>
                      {projet.tags.map((tech, index) => (
                          <span key={index} className={styles.tech}>
                              {tech}
                          </span>
                      ))}
                  </div>

                  <div className={styles.links}>
                      <a
                          href={projet.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                      >
                          Voir le code →
                      </a>
                      <a
                          href={projet.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.link} ${styles.linkPrimary}`}
                      >
                          Voir la démo →
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}
// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
   return projectsData.map((project) => ({
       slug: project.slug,
   }))
}