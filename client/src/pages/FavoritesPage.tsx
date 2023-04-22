import React from 'react';
import FavoritesList from '../modules/FavoritesList/FavoritesList';
import styles from './pages.module.scss';

const FavoritesPage = () => {
    return (
        <div className={styles.container}>
            <FavoritesList />
        </div>
    );
};

export default FavoritesPage;
