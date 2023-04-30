import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import starImg from '../../assets/images/star.png';
import starFilledImg from '../../assets/images/starFilled.png';
import { addFavoritesItem, removeFavoritesItem, toTrueTheUpdate } from '../../redux/favoritesSlice';
import { RootState } from '../../redux/store';
import { IFavoritesButton } from './IFavoritesButton';
import styles from './FavoritesButton.module.scss';
import { useLocation } from 'react-router-dom';

const FavoritesButton: FC<IFavoritesButton> = ({ id }) => {
    const inFavorites = useSelector((state: RootState) => state.favoritesSlice.favoritesList).find(
        (itemId) => itemId === id
    );
    const locationPath = useLocation().pathname;
    const dispatch = useDispatch();

    const addInFavorites = () => {
        dispatch(addFavoritesItem(id));
        if (locationPath !== '/favorites') dispatch(toTrueTheUpdate());
    };
    const removeFromFavorites = () => {
        dispatch(removeFavoritesItem(id));
    };

    return inFavorites ? (
        <img
            className={styles.removeButton}
            src={starFilledImg}
            alt=""
            onClick={removeFromFavorites}
        />
    ) : (
        <img className={styles.addButton} src={starImg} alt="" onClick={addInFavorites} />
    );
};

export default FavoritesButton;
