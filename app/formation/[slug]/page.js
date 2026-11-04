import Image from 'next/image';
import styles from './page.module.css';
import formationsData from '@/data/formations.json';
import { notFound } from 'next/navigation';

export default async function FormationDetail({ params }) {
  const { slug } = await params;
  const formation = formationsData.find((formation) => formation.slug === slug);   

   // Si le projet n'existe pas, afficher un message
  if (!formation) {
    notFound()
  }

 

  return (
      <div className={styles.container}>
          <div className={styles.header}>
              <h1 className={styles.title}>{formation.title}</h1>
              <p className={styles.description}>{formation.description}</p>
          </div>

          <div className={styles.content}>
              {formation.image && (
                <div className={styles.imageWrapper}>
                 <Image
                    width={800}
                    height={500}
                    className={styles.image}
                    src={formation.image}
                    alt={formation.title}
                    preload={true}
                 />
                </div>
  )}

              <div className={styles.details}>
                  <h2>Durée de la formation</h2>
                  <p className={styles.durée}>{formation.duration}</p>
                  {formation.tags.map((tech, index) => (
                      <span key={index} className={styles.tech}>
                          {tech}
                      </span>
                  ))}
              </div>
          </div>          
      </div>
  )
}
// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
   return formationsData.map((formation) => ({
       slug: formation.slug,
   }))
}
