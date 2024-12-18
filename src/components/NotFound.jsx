import React from 'react'
import styles from "../scss/components/notFound.module.scss"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className={styles.notFoundContainer}>
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
                <Link to="/">Go back to Home</Link>
            </div>
        </>

    );
}

export default NotFound