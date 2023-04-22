import React from 'react';
import Product from '../modules/Product/Product';
import ProductInfo from '../modules/Product/components/ProductInfo';
import styles from './pages.module.scss';

const ProductPage = () => {
    return (
        <div className={styles.container}>
            <Product />
            <ProductInfo />
        </div>
    );
};

export default ProductPage;
