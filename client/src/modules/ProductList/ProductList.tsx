import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import styles from './ProductList.module.scss';
import { routeConstants } from '../../models/enums/EConstants';
import CategoryProductList from './components/CategoryProductList';
import SearchProductList from './components/SearchProductList';

const ProductList = () => {
    const location = '/' + useLocation().pathname.split('/')[1];
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const brands = useSelector((state: RootState) => state.sideBarSlice.brands);

    return (
        <div className={styles.productListContainer}>
            {location === routeConstants.PRODUCT_LIST_ROUTE && (
                <CategoryProductList styles={styles} brands={brands} lang={lang} />
            )}
            {location === routeConstants.SEARCH_ROUTE && (
                <SearchProductList styles={styles} brands={brands} lang={lang} />
            )}
        </div>
    );
};

export default ProductList;
