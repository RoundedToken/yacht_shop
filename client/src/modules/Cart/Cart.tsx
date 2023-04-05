import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartFromStorage } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import { webCartProductList } from '../../services/webCartProductList';
import styles from './Cart.module.scss';
import CartMenu from './components/CartMenu';
import CartProductList from './components/CartProductList';
import CartSummary from './components/CartSummary';
import EmptyCart from './components/EmptyCart';
import { ICart } from './interfaces/ICart';

const Cart: FC<ICart> = () => {
    const idList = useSelector((state: RootState) => state.cartSlice.productList).map(
        (cartProduct) => cartProduct.id
    );
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const dispatch = useDispatch();
    const { data, isFetching, error } = webCartProductList.useFetchCartProductListQuery({
        idList,
        lang,
    });

    useEffect(() => {
        const setCart = () =>
            dispatch(setCartFromStorage(JSON.parse(localStorage.cartProductList)));

        window.addEventListener('storage', setCart);

        return () => {
            window.removeEventListener('storage', setCart);
        };
    }, [dispatch]);

    if (!idList || idList.length === 0)
        return (
            <div className={styles.cart}>
                <EmptyCart styles={styles} />{' '}
            </div>
        );

    return (
        <div>
            {isFetching && (
                <div className={styles.cart}>
                    {idList.map((id) => (
                        <h1 key={id}>Loading...</h1>
                    ))}
                </div>
            )}
            {error && <h1>Error!</h1>}
            {data && !isFetching && (
                <div className={styles.cart}>
                    <CartProductList productList={data} styles={styles} />
                    <CartSummary styles={styles} />
                    <CartMenu styles={styles} />
                </div>
            )}
        </div>
    );
};

export default Cart;
