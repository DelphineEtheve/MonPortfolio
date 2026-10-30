'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'


export default function Navigation() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className="container">
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Mon Portfolio
        </Link>

        <button
          type="button"
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Menu de navigation"
          aria-expanded={isOpen}
        >
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <li>
            <Link
              href="/"
              onClick={closeMenu}
              className={
                pathname === '/'
                ? `${styles.link} ${styles.active}`
                : styles.link
              }
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/projets"
              onClick={closeMenu}
              className={
              pathname === '/projets' || pathname.startsWith('/projets/')
              ? `${styles.link} ${styles.active}`
              : styles.link
              }
            >
              Projets
            </Link>
          </li>
          <li>
            <Link 
              href="/a-propos" 
              onClick={closeMenu}
              className={
                pathname=="/a-propos" 
                ? `${styles.link} ${styles.active}`
                : styles.link
              }
            >
              À propos
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className={
                pathname == "/contact"
                ? `${styles.link} ${styles.active}`
                : styles.link
              }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/formation" 
            onClick={closeMenu}
            className={
              pathname == "/formation"
                ? `${styles.link} ${styles.active}`
                : styles.link
              }
            >
              Formation
            </Link>
</li>
        </ul>
      </div>
    </nav>
  )
}