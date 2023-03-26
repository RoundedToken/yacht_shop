import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const catalogOnClick = () => {
        navigate(routeConstants.CATEGORIES_ROUTE + '/0');
    };
    const cableCrimpingOnClick = () => {
        navigate(routeConstants.CABLE_CRIMPING_ROUTE);
    };
    const cartOnClick = () => {
        navigate(routeConstants.CART_ROUTE);
    };
    const contactsOnClick = () => {
        navigate(routeConstants.CONTACTS_ROUTE);
    };

    return (
        <div className={styles.Header__Nav__List}>
            <HeaderNavListItem src={catalogImg} styles={styles} onClick={catalogOnClick}>
                <Text rus="Каталог" eng="Catalog" est="Kataloog" />
            </HeaderNavListItem>

            <HeaderNavListItem src={ropeImg} styles={styles} onClick={cableCrimpingOnClick}>
                <Text rus="Обжим тросов" eng="Rope crimping" est="Trossid krimpsutamine" />
            </HeaderNavListItem>

            <HeaderNavListItem src={contactsImg} styles={styles} onClick={contactsOnClick}>
                <Text rus="Контакты" eng="Contacts" est="Kontaktid" />
            </HeaderNavListItem>

            <HeaderNavListItem src={cartImg} styles={styles} onClick={cartOnClick}>
                <Text rus="Корзина" eng="Cart" est="Ostukorv" />
            </HeaderNavListItem>

            <HeaderLang styles={styles} />
        </div>
    );
};

export default HeaderNavList;
