import React from 'react';
import Product from '../modules/Product/Product';
import styles from './pages.module.scss';

const ProductPage = () => {
    return (
        <div className={styles.container}>
            <Product />
        </div>
    );
};

export default ProductPage;
