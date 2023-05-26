import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';
import { IOrderModal } from '../interfaces/IOrderModal';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import Response from './Response';
import { routeConstants } from '../../../models/enums/EConstants';
import { deleteResponse } from '../../../redux/cartSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice';
import { useNavigate } from 'react-router-dom';

const OrderModal: FC<IOrderModal> = ({ styles }) => {
    const response = useSelector((state: RootState) => state.cartSlice.response);
    const responseIsLoading = useSelector((state: RootState) => state.cartSlice.responseIsLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeOnClick = () => {
        if (response) {
            dispatch(deleteResponse());
            navigate(routeConstants.MAIN_ROUTE);
        }
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'auto';
    };

    return response ? (
        <div className={styles.response}>
            <Response styles={styles} response={response} />
        </div>
    ) : (
        <div className={styles.modalContent}>
            {!responseIsLoading && (
                <>
                    <div className={styles.title}>
                        <div className={styles.modalClose} onClick={closeOnClick}>
                            &times;
                        </div>

                        <Text rus="Ваш заказ" eng="Your order" est="Sinu tellimus" />
                    </div>

                    <OrderList styles={styles} />
                </>
            )}

            <OrderForm styles={styles} />
        </div>
    );
};

export default OrderModal;
