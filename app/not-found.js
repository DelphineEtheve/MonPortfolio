import Link from 'next/link'
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <div className= {styles.container}>
      <h1 className={styles.title}>404 - Page non trouvée</h1>
      <p className={styles.message}>Désolé, cette page n'existe pas.</p>
      <Link href="/">Retour à l'accueil</Link>
    </div>
  )
}