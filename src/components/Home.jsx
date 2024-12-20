import React from 'react'
import styles from "../scss/components/main.module.scss"
import Hero from './Hero'
import Menu from './Menu'

const Home = () => {
  return (
    <div className={styles.mainContent}>
      <Hero />
      <Menu />
    </div>
  )
}

export default Home