import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    copyCart,
    emptyCart,
    setResponse,
    switchResponseIsLoading,
} from '../../../redux/cartSlice';
import { RootState } from '../../../redux/store';
import { webOrderApi } from '../../../services/webOrder';
import Text from '../../Text/Text';
import { IOrderForm } from '../interfaces/IOrderForm';

const OrderForm: FC<IOrderForm> = ({ styles }) => {
    const [sendProductList, { data }] = webOrderApi.useFetchOrderMutation();
    const productList = useSelector((state: RootState) => state.cartSlice.productList).map(
        (product) => {
            return { id: product.id, count: product.count };
        }
    );
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const dispatch = useDispatch();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const commentsRef = useRef<HTMLTextAreaElement>(null);

    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(switchResponseIsLoading(true));
        dispatch(copyCart());
        dispatch(emptyCart());
        sendProductList({
            lang,
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            phone: phoneRef.current?.value || '',
            comments: commentsRef.current?.value || '',
            productList: productList,
        });
    };

    useEffect(() => {
        if (data) {
            dispatch(switchResponseIsLoading(false));
            dispatch(setResponse(data));
        }
    }, [data, dispatch]);

    return (
        <form className={styles.orderForm} onSubmit={(e) => formOnSubmit(e)}>
            <div className={styles.formName}>
                <label htmlFor="name">
                    <Text rus="Имя:" eng="Name:" est="Nimi: " />
                </label>

                <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    minLength={3}
                    maxLength={25}
                    required
                />
            </div>

            <div className={styles.formEmail}>
                <label htmlFor="email">
                    <Text rus="Email:" eng="Email:" est="Email:" />
                </label>

                <input ref={emailRef} type="email" name="email" required />
            </div>

            <div className={styles.formPhone}>
                <label htmlFor="phone">
                    <Text rus="Телефон:" eng="Phone:" est="Telefon:" />
                </label>

                <input ref={phoneRef} type="text" name="phone" required />
            </div>

            <div className={styles.formComments}>
                <label htmlFor="comments">
                    <Text rus="Комментарии:" eng="Comments:" est="Kommentaarid:" />
                </label>

                <textarea ref={commentsRef} name="comments" />
            </div>

            <button className={styles.formSubmit} type="submit">
                <Text rus="Отправить заказ" eng="Send an order" est="Saatke tellimus" />
            </button>
        </form>
    );
};

export default OrderForm;
