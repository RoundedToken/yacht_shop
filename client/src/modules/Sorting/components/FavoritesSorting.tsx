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
                name={<Text rus="Товар" eng="Product" est="Toode" />}
            />
            <FavoritesSortingItem
                styles={styles}
                value="name"
                sortType="DESC"
                name={<Text rus="Товар" eng="Product" est="Toode" />}
            />

            <FavoritesSortingItem
                styles={styles}
                value="brand"
                sortType="ASC"
                name={<Text rus="Бренд" eng="Brand" est="Brändi" />}
            />
            <FavoritesSortingItem
                styles={styles}
                value="brand"
                sortType="DESC"
                name={<Text rus="Бренд" eng="Brand" est="Brändi" />}
            />

            <FavoritesSortingItem
                styles={styles}
                value="code"
                sortType="ASC"
                name={<Text rus="Код" eng="Code" est="Kood" />}
            />
            <FavoritesSortingItem
                styles={styles}
                value="code"
                sortType="DESC"
                name={<Text rus="Код" eng="Code" est="Kood" />}
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
