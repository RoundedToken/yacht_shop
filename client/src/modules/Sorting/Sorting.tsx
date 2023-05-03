import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import CartSorting from './components/CartSorting';
import CategorySorting from './components/CategorySorting';
import FavoritesSorting from './components/FavoritesSorting';
import ProductListSorting from './components/ProductListSorting';
import SortingHeader from './components/SortingHeader';
import styles from './Sorting.module.scss';

const Sorting = () => {
    const location = '/' + useLocation().pathname.split('/')[1];

    return (
        <div className={styles.sortingContainer}>
            <SortingHeader styles={styles} />

            {routeConstants.CART_ROUTE === location && <CartSorting styles={styles} />}

            {routeConstants.FAVORITES_ROUTE === location && <FavoritesSorting styles={styles} />}

            {routeConstants.CATEGORIES_ROUTE === location && <CategorySorting styles={styles} />}

            {(routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location) && <ProductListSorting styles={styles} />}
        </div>
    );
};

export default Sorting;
