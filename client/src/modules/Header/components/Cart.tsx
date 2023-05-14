import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import chestImg from '../../../assets/images/chest.svg';
import emptyChestImg from '../../../assets/images/emptyChest.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import NavBarItem from './NavBarItem';
import Text from '../../../UI/Text/Text';
import { ICart } from '../interfaces/ICart';

const Cart: FC<ICart> = ({ styles }) => {
    const productCount = useSelector((state: RootState) => state.cartSlice.productList.length);
    const isCartEmpty = useSelector((state: RootState) => state.cartSlice.productList).length === 0;

    return (
        <NavBarItem
            styles={styles}
            route={routeConstants.CART_ROUTE}
            src={isCartEmpty ? emptyChestImg : chestImg}
            className={`${styles.navBar__item} ${styles.cart}`}
        >
            <Text rus="Корзина" eng="Cart" est="Ostukorv" />

            <div className={`${styles.cartCounter} cartCounter`}>{productCount}</div>
        </NavBarItem>
    );
};

export default Cart;
