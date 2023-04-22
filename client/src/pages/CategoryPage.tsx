import React from 'react';
import CategoryList from '../modules/CategoryList/CategoryList';
import styles from './pages.module.scss';

const CategoryPage = () => {
    return (
        <div className={styles.container}>
            <CategoryList />
        </div>
    );
};

export default CategoryPage;
