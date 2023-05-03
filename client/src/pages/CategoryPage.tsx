import React from 'react';
import Category from '../modules/CategoryList/Category';
import styles from './pages.module.scss';

const CategoryPage = () => {
    return (
        <div className={styles.container}>
            <Category />
        </div>
    );
};

export default CategoryPage;
