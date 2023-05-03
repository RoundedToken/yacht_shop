import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TDelivery } from '../../../models/types/TDelivery';
import {
    copyCart,
    emptyCart,
    setResponse,
    switchResponseIsLoading,
} from '../../../redux/cartSlice';
import { RootState } from '../../../redux/store';
import { webOrderApi } from '../../../services/webOrder';
import Text from '../../../UI/Text/Text';
import { IOrderForm } from '../interfaces/IOrderForm';

const OrderForm: FC<IOrderForm> = ({ styles }) => {
    const [sendProductList, { data, isLoading, error }] = webOrderApi.useFetchOrderMutation();
    const productList = useSelector((state: RootState) => state.cartSlice.productList).map(
        (product) => {
            return { id: product.id, count: product.count };
        }
    );
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const dispatch = useDispatch();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const commentsRef = useRef<HTMLTextAreaElement>(null);
    const deliveryRef = useRef<HTMLSelectElement>(null);

    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(switchResponseIsLoading(true));
        dispatch(copyCart());
        dispatch(emptyCart());
        sendProductList({
            lang,
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            comments: commentsRef.current?.value || '',
            delivery: (deliveryRef.current?.value as TDelivery) || 'pickUp',
            productList: productList,
        });
    };

    useEffect(() => {
        if (data) {
            dispatch(switchResponseIsLoading(false));
            dispatch(setResponse(data));
        }
    }, [data, dispatch]);

    if (isLoading) return <h1>Loading...</h1>;

    if (error) return <h1>Error!</h1>;

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

            <div className={styles.formComments}>
                <label htmlFor="comments">
                    <Text
                        rus="Номер телефона и комментарии:"
                        eng="Phone number and comments:"
                        est="Telefoninumber ja kommentaarid:"
                    />
                </label>

                <textarea ref={commentsRef} name="comments" />
            </div>

            <div>
                <select ref={deliveryRef} required>
                    <option value="">
                        <Text
                            rus="Выберите тип доставки"
                            eng="Select delivery type"
                            est="Valige kohaletoimetamise tüüp"
                        />
                    </option>
                    <option value="pickUp">
                        <Text rus="Самовывоз" eng="Pickup" est="Korja üles" />
                    </option>
                    <option value="post">
                        <Text
                            rus="Отправка службой Omnivia"
                            eng="Sending by Omnivia"
                            est="Saatmine Omnivia kaudu"
                        />
                    </option>
                </select>
            </div>

            <button className={styles.formSubmit} type="submit">
                <Text rus="Отправить заказ" eng="Send an order" est="Saatke tellimus" />
            </button>
        </form>
    );
};

export default OrderForm;
