import React from 'react';
import Favorites from '../modules/Favorites/Favorites';
import styles from './pages.module.scss';

const FavoritesPage = () => {
    return (
        <div className={styles.container}>
            <Favorites />
        </div>
    );
};

export default FavoritesPage;
