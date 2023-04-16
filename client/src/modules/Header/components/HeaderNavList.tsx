import React, { FC } from 'react';
import HeaderLang from './HeaderLang';
import cartImg from '../../../assets/images/cart.png';
import catalogImg from '../../../assets/images/catalog.png';
import ropeImg from '../../../assets/images/rope.png';
import mapImg from '../../../assets/images/map.png';
import heartFilledImg from '../../../assets/images/heart_filled.png';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import HeaderNavListItem from './HeaderNavListItem';
import { IHeaderNavList } from '../interfaces/IHeaderNavList';

const HeaderNavList: FC<IHeaderNavList> = ({ styles }) => {
    return (
        <div className={styles.navBar}>
            <HeaderNavListItem
                route={routeConstants.CATEGORIES_ROUTE}
                src={catalogImg}
                styles={styles}
            >
                <Text rus="Каталог" eng="Catalog" est="Kataloog" />
            </HeaderNavListItem>

            <HeaderNavListItem route={routeConstants.CRIMPING_ROUTE} src={ropeImg} styles={styles}>
                <Text rus="Обжим тросов" eng="Rope crimping" est="Trossid krimpsutamine" />
            </HeaderNavListItem>

            <HeaderNavListItem route={routeConstants.CONTACTS_ROUTE} src={mapImg} styles={styles}>
                <Text rus="Контакты" eng="Contacts" est="Kontaktid" />
            </HeaderNavListItem>

            <HeaderNavListItem route={routeConstants.CART_ROUTE} src={cartImg} styles={styles}>
                <Text rus="Корзина" eng="Cart" est="Ostukorv" />
            </HeaderNavListItem>

            <HeaderNavListItem
                route={routeConstants.FAVORITES_ROUTE}
                src={heartFilledImg}
                styles={styles}
            >
                <Text rus="Избранное" eng="Favorites" est="Lemmikud" />
            </HeaderNavListItem>

            <HeaderLang styles={styles} />
        </div>
    );
};

export default HeaderNavList;
