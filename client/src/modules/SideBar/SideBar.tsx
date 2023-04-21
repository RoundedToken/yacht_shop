import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import BrandSelect from '../../UI/BrandSelect/BrandSelect';
import CartTicker from '../../UI/Tickers/CartTicker';
import ContactsTicker from '../../UI/Tickers/ContactsTicker';
import CrimpingTicker from '../../UI/Tickers/CrimpingTicker';
import FavoritesTicker from '../../UI/Tickers/FavoritesTicker';
import MainTicker from '../../UI/Tickers/MainTicker';
import styles from './SideBar.module.scss';

const SideBar = () => {
    const location = '/' + useLocation().pathname.split('/')[1];
    return (
        <div className={`${styles.sideBar} sideBar`}>
            {location === routeConstants.MAIN_ROUTE && <MainTicker />}
            {location === routeConstants.CRIMPING_ROUTE && <CrimpingTicker />}
            {location === routeConstants.CONTACTS_ROUTE && <ContactsTicker />}
            {location === routeConstants.CART_ROUTE && <CartTicker />}
            {location === routeConstants.FAVORITES_ROUTE && <FavoritesTicker />}

            {(routeConstants.CATEGORIES_ROUTE === location ||
                routeConstants.PRODUCT_LIST_ROUTE === location) && <BrandSelect />}
        </div>
    );
};

export default SideBar;
