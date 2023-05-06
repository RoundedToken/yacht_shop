import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { ICartSorting } from '../interfaces/ICartSorting';
import CartSortingItem from './CartSortingItem';

const CartSorting: FC<ICartSorting> = ({ styles }) => {
    return (
        <>
            <CartSortingItem
                styles={styles}
                value="name"
                sortType="ASC"
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />
            <CartSortingItem
                styles={styles}
                value="name"
                sortType="DESC"
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />

            <CartSortingItem
                styles={styles}
                value="count"
                sortType="ASC"
                name={<Text rus="Количество" eng="Amount" est="Kogus" />}
            />
            <CartSortingItem
                styles={styles}
                value="count"
                sortType="DESC"
                name={<Text rus="Количество" eng="Amount" est="Kogus" />}
            />

            <CartSortingItem
                styles={styles}
                value="price"
                sortType="ASC"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />

            <CartSortingItem
                styles={styles}
                value="price"
                sortType="DESC"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />

            <CartSortingItem
                styles={styles}
                value="sum"
                sortType="ASC"
                name={<Text rus="Всего" eng="Total" est="Kokku" />}
            />

            <CartSortingItem
                styles={styles}
                value="sum"
                sortType="DESC"
                name={<Text rus="Всего" eng="Total" est="Kokku" />}
            />
        </>
    );
};

export default CartSorting;
