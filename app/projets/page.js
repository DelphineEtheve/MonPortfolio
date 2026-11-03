import Link from 'next/link'
import styles from './page.module.css'
import projectsData from '@/data/projectsData.json'
import Tag from '@/components/Tag/Tag'

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mes Projets</h1>
      <p className={styles.description}>
        Découvrez les projets sur lesquels j&apos;ai travaillé
      </p>
      
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <Link 
            key={project.id} 
            href={`/projets/${project.slug}`} 
            className={styles.card}  
        >
          <div className={styles.cardImage}>
            <img
             src={project.image} 
             alt={project.title}
             className={styles.image} />
          </div>

          <div className={styles.cardContent}>
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <div className={styles.tags}>
              {project.tags.map((tech, index) => (
                <Tag 
                  key={index}
                  isDark={true}
                >{tech}
                </Tag>
              ))}
            </div>
            <span className={styles.linkText}>Voir le projet</span>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}


           