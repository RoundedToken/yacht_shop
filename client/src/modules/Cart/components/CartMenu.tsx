import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ICartMenu } from '../interfaces/ICartMenu';
import { emptyCart } from '../../../redux/cartSlice';
import trashImg from '../../../assets/images/trash.png';
import forwardArrowImg from '../../../assets/images/forwardArrow.png';
import Text from '../../../UI/Text/Text';
import { setModalType } from '../../../redux/modalSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice';

const CartMenu: FC<ICartMenu> = ({ styles }) => {
    const dispatch = useDispatch();

    const emptyCartOnClick = () => {
        dispatch(emptyCart());
    };
    const checkOutOnClick = () => {
        dispatch(setModalType('order'));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <div className={styles.cartMenu}>
            <div onClick={emptyCartOnClick} className={styles.emptyTheCart}>
                <img src={trashImg} alt="" />

                <Text rus="Очистить корзину " eng="Empty cart" est="Tühi ostukorv" />
            </div>

            <div className={styles.checkout} onClick={checkOutOnClick}>
                <img src={forwardArrowImg} alt="" />

                <Text rus="Оформить заказ" eng="Checkout" est="Kassasse" />
            </div>
        </div>
    );
};

export default CartMenu;
