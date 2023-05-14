import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import { IPageTitle } from '../interfaces/IPageTitle';
import SearchTitle from './SearchTitle';

const PageTitle: FC<IPageTitle> = ({ styles }) => {
    const location = useLocation().pathname.split('/');
    const locationPath = '/' + location[1];
    const searchStr = locationPath === routeConstants.SEARCH_ROUTE ? decodeURI(location[2]) : '';

    return (
        <div className={styles.pageTitle}>
            {locationPath === routeConstants.MAIN_ROUTE && (
                <Text rus="Главная" eng="Main" est="Avaleht" />
            )}
            {locationPath === routeConstants.CRIMPING_ROUTE && (
                <Text rus="Обжим тросов" eng="Rope crimping" est="Trossid krimpsutamine" />
            )}
            {locationPath === routeConstants.CONTACTS_ROUTE && (
                <Text rus="Контакты" eng="Contacts" est="Kontaktid" />
            )}
            {locationPath === routeConstants.CART_ROUTE && (
                <Text rus="Корзина" eng="Cart" est="Ostukorv" />
            )}
            {locationPath === routeConstants.FAVORITES_ROUTE && (
                <Text rus="Избранное" eng="Favorites" est="Lemmikud" />
            )}
            {locationPath === routeConstants.SEARCH_ROUTE && <SearchTitle searchStr={searchStr} />}
        </div>
    );
};

export default PageTitle;
