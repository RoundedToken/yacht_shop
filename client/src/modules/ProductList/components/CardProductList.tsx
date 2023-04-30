import React, { FC } from 'react';
import { ICardProductList } from '../interfaces/ICardProductList';
import ProductCard from './ProductCard';

const CardProductList: FC<ICardProductList> = ({ styles, productList, brands }) => {
    return (
        <div className={styles.productListGrid}>
            {productList
                .filter((product) =>
                    brands.length === 0 ? true : brands.includes(product.brand.toLowerCase())
                )
                .map((product) => (
                    <ProductCard key={product.id} styles={styles} product={product} />
                ))}
        </div>
    );
};

export default CardProductList;
