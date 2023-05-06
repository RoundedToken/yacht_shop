import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IFavoritesSorting } from '../interfaces/IFavoritesSorting';
import FavoritesSortingItem from './FavoritesSortingItem';

const FavoritesSorting: FC<IFavoritesSorting> = ({ styles }) => {
    return (
        <>
            <FavoritesSortingItem
                styles={styles}
                value="name"
                sortType="ASC"
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />
            <FavoritesSortingItem
                styles={styles}
                value="name"
                sortType="DESC"
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />

            <FavoritesSortingItem
                styles={styles}
                value="price"
                sortType="ASC"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />
            <FavoritesSortingItem
                styles={styles}
                value="price"
                sortType="DESC"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />
        </>
    );
};

export default FavoritesSorting;
