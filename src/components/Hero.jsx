import React from 'react'
import styles from "../scss/components/hero.module.scss"
import RestauranFood from "../assets/icons/restauranfood.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className={styles.heroMainContainer}>
            <section>
                <div className={styles.heroContainer}>
                    <h1 className={styles.title}>Little Lemon</h1>
                    <h2 className={styles.subTitle}>Chicago</h2>
                    <p className={styles.description}> We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button aria-label='On Click' className={styles.btnReserve}>Reserve Table</button></Link>
                </div>

                <div className={styles.imageContainer}>
                    <img src={RestauranFood} alt="Food image" className={styles.heroImage} />
                </div>

            </section>
        </div>

    )
}

export default Hero