import React, { useState } from 'react'
import Menu from "../assets/icons/menu.svg"
import styles from "../scss/components/hamburger.module.scss"

const HamburgerMenu = ({ onMenuToggle }) => {

    return (
        <img src={Menu} alt="menu" onClick={onMenuToggle} className={styles.menuLogo} />
    )
}

export default HamburgerMenu