import React, { useState } from 'react'
import Logo from "../assets/icons/Logo.svg";
import Nav from './Nav';
import styles from "../scss/components/header.module.scss"
import HamburgerMenu from './HamburgerMenu';

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
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Company Logo" className={styles.logo} />
      </div>
      {/* Nav Section */}
      <Nav isOpen={menuOpen} onClose={closeMenu} />
    </header>
  )
}

export default Header