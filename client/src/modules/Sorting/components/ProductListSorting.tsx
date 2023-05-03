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
                sortType="ASC"
                name={<Text rus="Товар" eng="Product" est="Toode" />}
            />
            <ProductListSortingItem
                styles={styles}
                value="name"
                sortType="DESC"
                name={<Text rus="Товар" eng="Product" est="Toode" />}
            />

            <ProductListSortingItem
                styles={styles}
                value="brand"
                sortType="ASC"
                name={<Text rus="Бренд" eng="Brand" est="Brändi" />}
            />
            <ProductListSortingItem
                styles={styles}
                value="brand"
                sortType="DESC"
                name={<Text rus="Бренд" eng="Brand" est="Brändi" />}
            />

            <ProductListSortingItem
                styles={styles}
                value="code"
                sortType="ASC"
                name={<Text rus="Код" eng="Code" est="Kood" />}
            />
            <ProductListSortingItem
                styles={styles}
                value="code"
                sortType="DESC"
                name={<Text rus="Код" eng="Code" est="Kood" />}
            />

            <ProductListSortingItem
                styles={styles}
                value="price"
                sortType="ASC"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />
            <ProductListSortingItem
                styles={styles}
                value="price"
                sortType="DESC"
                name={<Text rus="Цена" eng="Price" est="Hind" />}
            />
        </>
    );
};

export default ProductListSorting;
