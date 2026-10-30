import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){

    const currentYear = new Date().getFullYear()
    return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <p>© {currentYear} Portfolio de Delphine NICOLAS-ETHEVE</p>
            <div className={styles.socialLinks}>
                <a
                    href="https://github.com/DelphineEtheve"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
                </a>
                <a
                    href="https://linkedin.com/in/delphine-nicolas-b0119a136"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                </a>
            </div>
        </div>
    </footer>
    )
}