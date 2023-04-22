import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import { IPageTitle } from '../interfaces/IPageTitle';

const PageTitle: FC<IPageTitle> = ({ styles }) => {
    const location = '/' + useLocation().pathname.split('/')[1];
    return (
        <div className={styles.pageTitle}>
            {location === routeConstants.MAIN_ROUTE && (
                <Text rus="Главная" eng="Main" est="Avaleht" />
            )}
            {location === routeConstants.CRIMPING_ROUTE && (
                <Text rus="Обжим тросов" eng="Rope crimping" est="Trossid krimpsutamine" />
            )}
            {location === routeConstants.CONTACTS_ROUTE && (
                <Text rus="Контакты" eng="Contacts" est="Kontaktid" />
            )}
            {location === routeConstants.CART_ROUTE && (
                <Text rus="Корзина" eng="Cart" est="Ostukorv" />
            )}
            {location === routeConstants.FAVORITES_ROUTE && (
                <Text rus="Избранное" eng="Favorites" est="Lemmikud" />
            )}
        </div>
    );
};

export default PageTitle;
