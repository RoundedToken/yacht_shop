import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Text from '../../Text/Text';
import { ICartSummary } from '../interfaces/ICartSummary';

const CartSummary: FC<ICartSummary> = ({ styles }) => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const totalCount = productList.reduce((pV, cV) => pV + cV.count, 0);
    const totalSum = productList.reduce((pV, cV) => pV + cV.count * cV.price, 0).toFixed(2);

    return (
        <div className={styles.cartSummary}>
            <div className={styles.totalCount}>
                <Text
                    rus="Количество товаров в корзине: "
                    eng="Number of items in the cart: "
                    est="Kaupade arv ostukorvis: "
                />
                &nbsp;
                {totalCount}
            </div>

            <div className={styles.totalSum}>
                <Text rus="Общая сумма: " eng="Total amount: " est="Kogu summa: " />
                &nbsp;
                {totalSum}
                &nbsp; &euro;
            </div>
        </div>
    );
};

export default CartSummary;
