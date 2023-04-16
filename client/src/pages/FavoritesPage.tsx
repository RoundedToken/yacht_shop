import React from 'react';
import FavoritesList from '../modules/FavoritesList/FavoritesList';
import FavoritesTicker from '../modules/Tickers/FavoritesTicker';

const FavoritesPage = () => {
    return (
        <div>
            <FavoritesTicker />
            <FavoritesList />
        </div>
    );
};

export default FavoritesPage;
