import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import { RootState } from '../../redux/store';
import CartListFilter from './components/CartListFilter';
import CartListFilterHeader from './components/CartListFilterHeader';
import FavoritesFilter from './components/FavoritesFilter';
import FavoritesFilterHeader from './components/FavoritesFilterHeader';
import ProductListFilter from './components/ProductListFilter';
import ProductListFilterHeader from './components/ProductListFilterHeader';
import styles from './Filter.module.scss';

const Filter = () => {
    const location = '/' + useLocation().pathname.split('/')[1];
    const filterDisplay = useSelector((state: RootState) => state.stylesSlice.filterDisplay);

    return (
        <div
            style={filterDisplay === 'none' ? {} : { width: '100%' }}
            className={styles.filterContainer}
        >
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

            {routeConstants.FAVORITES_ROUTE === location && (
                <>
                    <FavoritesFilterHeader styles={styles} />

                    <FavoritesFilter styles={styles} />
                </>
            )}
        </div>
    );
};

export default Filter;
