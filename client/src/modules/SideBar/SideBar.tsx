import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import BrandSelect from '../BrandSelect/BrandSelect';
import styles from './SideBar.module.scss';
import Ticker from '../Ticker/Ticker';

const SideBar = () => {
    const location = '/' + useLocation().pathname.split('/')[1];

    return (
        <div className={`${styles.sideBar} sideBar`}>
            {(location === routeConstants.MAIN_ROUTE ||
                location === routeConstants.CRIMPING_ROUTE ||
                location === routeConstants.CONTACTS_ROUTE) && <Ticker />}

            {(routeConstants.CATEGORIES_ROUTE === location ||
                routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location ||
                routeConstants.CART_ROUTE === location ||
                routeConstants.FAVORITES_ROUTE === location) && <BrandSelect />}
        </div>
    );
};

export default SideBar;
