import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import CartListFilter from './components/CartListFilter';
import CartListFilterHeader from './components/CartListFilterHeader';
import ProductListFilter from './components/ProductListFilter';
import ProductListFilterHeader from './components/ProductListFilterHeader';
import styles from './Filter.module.scss';

const Filter = () => {
    const location = '/' + useLocation().pathname.split('/')[1];

    return (
        <div className={styles.filterContainer}>
            {(routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location) && (
                <>
                    <ProductListFilterHeader styles={styles} />

                    <ProductListFilter styles={styles} />
                </>
            )}

            {routeConstants.CART_ROUTE === location && (
                <>
                    <CartListFilterHeader styles={styles} />

                    <CartListFilter styles={styles} />
                </>
            )}
        </div>
    );
};

export default Filter;
