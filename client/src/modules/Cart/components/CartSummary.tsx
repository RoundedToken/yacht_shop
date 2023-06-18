import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';
import { ICartSummary } from '../interfaces/ICartSummary';

const CartSummary: FC<ICartSummary> = ({ styles }) => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const totalCount = productList.length;
    const totalSum = productList.reduce((pV, cV) => pV + cV.count * cV.price, 0);

    return (
        <div className={styles.cartSummary}>
            <div className={styles.totalCount}>
                <Text rus="Товары" eng="Products" est="Kaubad" />
                &nbsp;
                <div className={styles.totalCountNumber}>{`(${totalCount})`}</div>
            </div>

            <div className={styles.totalSum}>{eurFormatter.format(totalSum)}</div>
        </div>
    );
};

export default CartSummary;
