import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';
import { ICartSummary } from '../interfaces/ICartSummary';

const CartSummary: FC<ICartSummary> = ({ styles }) => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const totalCount = productList.reduce((pV, cV) => pV + cV.count, 0);
    const totalSum = productList.reduce((pV, cV) => pV + cV.count * cV.price, 0);

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
                {eurFormatter.format(totalSum)}
            </div>
        </div>
    );
};

export default CartSummary;
