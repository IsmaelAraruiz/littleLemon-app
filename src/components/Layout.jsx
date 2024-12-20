import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from "../scss/components/layout.module.scss"


const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout