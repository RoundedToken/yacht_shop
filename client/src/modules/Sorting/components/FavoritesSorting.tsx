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
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />

            <FavoritesSortingItem
                styles={styles}
                value="price"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />

            <FavoritesSortingItem
                styles={styles}
                value="brand"
                name={<Text rus="Бренд" eng="Brand" est="Brändi" />}
            />
        </>
    );
};

export default FavoritesSorting;
