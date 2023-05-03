import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IProductListFilter } from '../interfaces/IProductListFilter';
import ProductListFilterItem from './ProductListFilterItem';

const ProductListFilter: FC<IProductListFilter> = ({ styles }) => {
    return (
        <>
            <ProductListFilterItem
                styles={styles}
                value="inStock"
                name={<Text rus="В наличии" eng="In stock" est="Laos" />}
            />

            <ProductListFilterItem
                styles={styles}
                value="notInStock"
                name={<Text rus="Нет в наличии" eng="Not available" est="Pole saadaval" />}
            />

            <ProductListFilterItem
                styles={styles}
                value="inCart"
                name={<Text rus="В корзине" eng="In cart" est="Korvis" />}
            />

            <ProductListFilterItem
                styles={styles}
                value="notInCart"
                name={<Text rus="Не в корзине" eng="Not in cart" est="Ei ole ostukorvis" />}
            />

            <ProductListFilterItem
                styles={styles}
                value="inFavorites"
                name={<Text rus="В избранных" eng="Featured" est="Esiletõstetud" />}
            />

            <ProductListFilterItem
                styles={styles}
                value="notInFavorites"
                name={
                    <Text rus="Не в избранных" eng="Not in favorites" est="Pole lemmikute hulgas" />
                }
            />
        </>
    );
};

export default ProductListFilter;
