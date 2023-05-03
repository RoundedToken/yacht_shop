import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import { IHeaderCart } from '../interfaces/IHeaderCart';
import HeaderNavListItem from './HeaderNavListItem';
import cartImg from '../../../assets/images/cart.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const HeaderCart: FC<IHeaderCart> = ({ styles }) => {
    const productCount = useSelector((state: RootState) => state.cartSlice.productList.length);

    return (
        <HeaderNavListItem route={routeConstants.CART_ROUTE} src={cartImg} styles={styles}>
            <div className={`${styles.cartCounter} cartCounter`}>{productCount}</div>

            <Text rus="Корзина" eng="Cart" est="Ostukorv" />
        </HeaderNavListItem>
    );
};

export default HeaderCart;
