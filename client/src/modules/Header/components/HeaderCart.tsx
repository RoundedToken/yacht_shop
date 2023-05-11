import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import { IHeaderCart } from '../interfaces/IHeaderCart';
import HeaderNavListItem from './HeaderNavListItem';
import chestImg from '../../../assets/images/chest.svg';
import emptyChestImg from '../../../assets/images/emptyChest.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const HeaderCart: FC<IHeaderCart> = ({ styles }) => {
    const productCount = useSelector((state: RootState) => state.cartSlice.productList.length);
    const isCartEmpty = useSelector((state: RootState) => state.cartSlice.productList).length === 0;

    return (
        <HeaderNavListItem
            route={routeConstants.CART_ROUTE}
            src={isCartEmpty ? emptyChestImg : chestImg}
            styles={styles}
        >
            <Text rus="Корзина" eng="Cart" est="Ostukorv" />

            <div className={`${styles.cartCounter} cartCounter`}>{productCount}</div>
        </HeaderNavListItem>
    );
};

export default HeaderCart;
