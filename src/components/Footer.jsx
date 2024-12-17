import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/icons/small_logo.png"
import styles from "../scss/components/footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo section */}
      <section className={styles.logoSection}>
        <img src={Logo} alt="Restaurant Logo" className={styles.logoFooter} />
      </section>

      {/* Navigation Section */}
      <nav aria-label='Footer Navigation' className={styles.navigationSection}>
        <h2>Doormat Navigation</h2>
        <ul>
          <li><Link to="/" className={styles.link}>Home</Link></li>
          <li><Link to="/about" className={styles.link}>About</Link></li>
          <li><Link to="/menu" className={styles.link}>Menu</Link></li>
          <li><Link to="/reservations" className={styles.link}>Reservations</Link></li>
          <li><Link to="/order-online" className={styles.link}>Order Online</Link></li>
          <li><Link to="/login" className={styles.link}>Login</Link></li>
        </ul>
      </nav>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Contact</h2>
        <address>
          <ul>
            <li><a href="">1234 Elm Street, USA</a></li>
            <li><a href="">555 555 555</a></li>
            <li><a href="">little@lemon.com</a></li>
          </ul>
        </address>
      </section>

      {/* Social Media Section */}
      <section className={styles.socialMediaSection}>
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer">X</a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer