import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IOrder } from './interfaces/IOrder';
import { deleteResponse } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import Text from '../../UI/Text/Text';
import styles from './Order.module.scss';
import OrderForm from './components/OrderForm';
import closeImg from '../../assets/images/close.png';
import { switchOrderModalDisplay } from '../../redux/stylesSlice';
import OrderList from './components/OrderList';

const Order: FC<IOrder> = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const modalDisplay = useSelector((state: RootState) => state.stylesSlice.orderModalDisplay);
    const response = useSelector((state: RootState) => state.cartSlice.response);
    const dispatch = useDispatch();

    window.onclick = function (e) {
        if (e.target === modalRef.current) {
            dispatch(switchOrderModalDisplay());
            document.body.style.overflow = 'auto';
            dispatch(deleteResponse());
        }
    };
    const closeOnClick = () => {
        dispatch(switchOrderModalDisplay());
        document.body.style.overflow = 'auto';
        dispatch(deleteResponse());
    };

    useEffect(() => {
        if (modalRef.current) modalRef.current.style.display = modalDisplay;
    }, [modalDisplay]);

    return (
        <div ref={modalRef} className={styles.modal}>
            <div className={styles.modalContentContainer}>
                <img onClick={closeOnClick} className={styles.modalClose} src={closeImg} alt="" />

                {response ? (
                    <div className={styles.response}>{response}</div>
                ) : (
                    <div className={styles.modalContent}>
                        <div className={styles.title}>
                            <Text rus="Ваш заказ" eng="Your order" est="Sinu tellimus" />
                        </div>

                        <OrderList styles={styles} />

                        <OrderForm styles={styles} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;
