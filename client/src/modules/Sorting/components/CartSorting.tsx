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
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />

            <CartSortingItem
                styles={styles}
                value="sum"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />

            <CartSortingItem
                styles={styles}
                value="brand"
                name={<Text rus="Бренд" eng="Brand" est="Brändi" />}
            />
        </>
    );
};

export default CartSorting;
