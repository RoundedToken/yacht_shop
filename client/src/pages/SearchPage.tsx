import React from 'react';
import ProductList from '../modules/ProductList/ProductList';
import styles from './pages.module.scss';

const SearchPage = () => {
    return (
        <div className={styles.container}>
            <ProductList />
        </div>
    );
};

export default SearchPage;
