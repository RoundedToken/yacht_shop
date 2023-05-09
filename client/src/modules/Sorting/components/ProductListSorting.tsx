import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IProductListSorting } from '../interfaces/IProductListSorting';
import ProductListSortingItem from './ProductListSortingItem';

const ProductListSorting: FC<IProductListSorting> = ({ styles }) => {
    return (
        <>
            <ProductListSortingItem
                styles={styles}
                value="name"
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />

            <ProductListSortingItem
                styles={styles}
                value="price"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />
        </>
    );
};

export default ProductListSorting;
