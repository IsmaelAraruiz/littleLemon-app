import React from 'react'
import styles from "../scss/components/notFound.module.scss"

const NotFound = () => {
    return (
        <>
            <div className={styles.notFoundContainer}>
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
                <a href="/">Go back to Home</a>
            </div>
        </>

    );
}

export default NotFound