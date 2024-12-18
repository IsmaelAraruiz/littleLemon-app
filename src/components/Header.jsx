import React, { useState } from 'react'
import Logo from "../assets/icons/Logo.svg";
import cartLogo from "../assets/icons/Basket.svg"
import Nav from './Nav';
import styles from "../scss/components/header.module.scss"
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      {/* Hamburger Icon */}
      <HamburgerMenu onMenuToggle={toggleMenu} />

      {/* Logo Section */}
      <Link to="/" className={styles.logoContainer}>
        <img src={Logo} alt="Restaurant Logo" className={styles.logo} />
      </Link>
      {/* Nav Section */}
      <Nav isOpen={menuOpen} onClose={closeMenu} />

      {/* Cart Section */}
      <div className={styles.cartLogoContainer}>
        <img src={cartLogo} alt="cart Logo" className={styles.cartLogo} />
      </div>
    </header>
  )
}

export default Header