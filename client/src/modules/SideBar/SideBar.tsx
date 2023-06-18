import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import BrandSelect from '../BrandSelect/BrandSelect';
import styles from './SideBar.module.scss';
import ListModeSwitch from './components/ListModeSwitch';
import Filter from '../Filter/Filter';
import Sorting from '../Sorting/Sorting';

const SideBar = () => {
    const location = '/' + useLocation().pathname.split('/')[1];

    return (
        <div
            style={
                location === routeConstants.PRODUCT_ROUTE ||
                location === routeConstants.CONTACTS_ROUTE ||
                location === routeConstants.CRIMPING_ROUTE
                    ? { display: 'none' }
                    : {}
            }
            className={`${styles.sideBar} sideBar`}
        >
            {(routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location) && <ListModeSwitch styles={styles} />}

            {(routeConstants.CATEGORIES_ROUTE === location ||
                routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location ||
                routeConstants.CART_ROUTE === location ||
                routeConstants.FAVORITES_ROUTE === location) && (
                <>
                    <BrandSelect />

                    <Sorting />
                </>
            )}

            {(routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.CART_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location ||
                routeConstants.FAVORITES_ROUTE === location) && <Filter />}
        </div>
    );
};

export default SideBar;
