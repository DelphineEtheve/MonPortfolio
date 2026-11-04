import styles from './page.module.css'
import Link from "next/link";
import formationsData from '@/data/formations.json'
import Tag from '@/components/Tag/Tag'


export default function Formation() {
  return (
    <div className={styles.formation}>
      <h1>Ma formation</h1>
      <p>Découvrez mon parcours de formation.</p>

      <div className={styles.formationsList}>
        {formationsData.map((formation) => (
          <Link 
           key={formation.id} 
           href={`/formation/${formation.slug}`}
           className={styles.formationItem}
          >
            <h2>{formation.title}</h2>
            <p>{formation.description}</p>
            <div className={styles.tags}>
              {formation.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}