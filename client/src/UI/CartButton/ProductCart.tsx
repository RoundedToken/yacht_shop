import React, { FC } from 'react';
import trashImg from '../../assets/images/trash.png';
import addToCartImg from '../../assets/images/addToCart.png';
import { ICartButton } from './IProductCart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addToCart, removeFromCart, toTrueCartUpdate } from '../../redux/cartSlice';
import styles from './CartButton.module.scss';

const CartButton: FC<ICartButton> = ({ id, price, brand }) => {
    const cartProductList = useSelector((state: RootState) => state.cartSlice.productList);
    const dispatch = useDispatch();

    const addToCartOnClick = (id: number, price: number, brand: string) => {
        dispatch(addToCart({ id, count: 1, price, brand }));
        dispatch(toTrueCartUpdate());
    };
    const removeFromCartOnClick = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return cartProductList.find((cartProduct) => cartProduct.id === id) ? (
        <div className={styles.remove} onClick={() => removeFromCartOnClick(id)}>
            <img src={trashImg} alt="" />
        </div>
    ) : (
        <div className={styles.addToCart} onClick={() => addToCartOnClick(id, price, brand)}>
            <img src={addToCartImg} alt="" />
        </div>
    );
};

export default CartButton;
