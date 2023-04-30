import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';
import { IOrderModal } from '../interfaces/IOrderModal';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

const OrderModal: FC<IOrderModal> = ({ styles }) => {
    const response = useSelector((state: RootState) => state.cartSlice.response);

    return response ? (
        <div className={styles.response}>{response}</div>
    ) : (
        <div className={styles.modalContent}>
            <div className={styles.title}>
                <Text rus="Ваш заказ" eng="Your order" est="Sinu tellimus" />
            </div>

            <OrderList styles={styles} />

            <OrderForm styles={styles} />
        </div>
    );
};

export default OrderModal;
