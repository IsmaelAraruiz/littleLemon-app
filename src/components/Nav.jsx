import React from 'react'
import { Link } from "react-router-dom"
import styles from "../scss/components/nav.module.scss"

const Nav = ({ isOpen, onClose }) => {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`} aria-label='Main Navigation'>
      <button className={styles.btnClose} onClick={onClose}>Close</button>
      <ul>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/about" className={styles.link}>About</Link></li>
        <li><Link to="/menu" className={styles.link}>Menu</Link></li>
        <li><Link to="/reservations" className={styles.link}>Reservations</Link></li>
        <li><Link to="/order-online" className={styles.link}>Order Online</Link></li>
        <li><Link to="/login" className={styles.link}>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav