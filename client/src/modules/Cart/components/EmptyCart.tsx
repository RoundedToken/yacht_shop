import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import restoreImg from '../../../assets/images/restore.png';
import { IEmptyCart } from '../interfaces/IEmptyCart';
import { RootState } from '../../../redux/store';
import { restoreCart } from '../../../redux/cartSlice';
import Text from '../../../UI/Text/Text';
import ToCatalogButton from '../../../UI/ToCatalogButton/ToCatalogButton';
import { toTrueCartUpdate } from '../../../redux/cartSlice';

const EmptyCart: FC<IEmptyCart> = ({ styles }) => {
    const dispatch = useDispatch();
    const isCopy =
        useSelector((state: RootState) => state.cartSlice.productListCopy).length === 0
            ? false
            : true;

    const restoreCartOnClick = () => {
        dispatch(restoreCart());
        dispatch(toTrueCartUpdate());
    };

    return (
        <div className={styles.emptyCart}>
            <div className={styles.emptyCartTitle}>
                <Text
                    rus="Ваша корзина пуста..."
                    eng="Your cart is empty..."
                    est="Teie ostukorv on tühi..."
                />
            </div>

            <div className={styles.emptyCartMenu}>
                {isCopy && (
                    <div className={styles.restoreCart} onClick={restoreCartOnClick}>
                        <div className={styles.restoreImg}>
                            <img src={restoreImg} alt="" />
                        </div>
                        <Text
                            rus={`Восстановить\nкорзину`}
                            eng={`Restore\ncart`}
                            est={`Taasta\nostukorvi`}
                        />
                    </div>
                )}

                <ToCatalogButton />
            </div>
        </div>
    );
};

export default EmptyCart;
