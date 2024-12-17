import React from 'react';
import styles from '../scss/components/menu.module.scss';
import recipes from '../assets/data/recipes.json';
import DataFetcher from './DataFetcher';

const Menu = () => {
    return (
        <section className={styles.menuContainer}>
            <div className={styles.menuHeader}>
                <h3>This week's specials!</h3>
                <button>Online Menu</button>
            </div>

            <div className={styles.cardsContainer}>
                <DataFetcher
                    url={recipes}
                    isLocal={true}
                    render={(data) =>
                        data.map((recipe) => (
                            <div key={recipe.id} className={styles.card}>
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className={styles.cardImg}
                                />
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeading}>
                                        <h4>{recipe.title}</h4>
                                        <p>${recipe.price}</p>
                                    </div>
                                    <p>{recipe.description}</p>
                                    <button>Order Now</button>
                                </div>
                            </div>
                        ))
                    }
                />
            </div>
        </section>
    );
};

export default Menu;
