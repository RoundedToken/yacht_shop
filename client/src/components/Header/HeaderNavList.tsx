import React, { FC } from 'react';
import { routeConstants } from '../../routes/constants';
import HeaderLang from './HeaderLang';
import HeaderNavListItem from './HeaderNavListItem';
import cartImg from '../../assets/HeaderImg/cart.png';
import catalogImg from '../../assets/HeaderImg/catalog.png';
import contactsImg from '../../assets/HeaderImg/contacts.png';
import ropeImg from '../../assets/HeaderImg/rope.png';
import Text from '../Text/Text';

interface IHeaderNavList {
    styles: {
        readonly [key: string]: string;
    };
}

const HeaderNavList: FC<IHeaderNavList> = ({ styles }) => {
    return (
        <div className={styles.Header__Nav__List}>
            <HeaderNavListItem
                route={routeConstants.CATEGORIES_ROUTE}
                src={catalogImg}
                styles={styles}
                param="/0"
            >
                <Text rus="Каталог" eng="Catalog" est="Kataloog" />
            </HeaderNavListItem>

            <HeaderNavListItem route={routeConstants.CRIMPING_ROUTE} src={ropeImg} styles={styles}>
                <Text rus="Обжим тросов" eng="Rope crimping" est="Trossid krimpsutamine" />
            </HeaderNavListItem>

            <HeaderNavListItem
                route={routeConstants.CONTACTS_ROUTE}
                src={contactsImg}
                styles={styles}
            >
                <Text rus="Контакты" eng="Contacts" est="Kontaktid" />
            </HeaderNavListItem>

            <HeaderNavListItem route={routeConstants.CART_ROUTE} src={cartImg} styles={styles}>
                <Text rus="Корзина" eng="Cart" est="Ostukorv" />
            </HeaderNavListItem>

            <HeaderLang styles={styles} />
        </div>
    );
};

export default HeaderNavList;
