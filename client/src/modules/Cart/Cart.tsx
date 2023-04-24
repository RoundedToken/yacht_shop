import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toFalseCartUpdate } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import { webCartProductList } from '../../services/webCartProductList';
import styles from './Cart.module.scss';
import CartMenu from './components/CartMenu';
import CartProductList from './components/CartProductList';
import CartSummary from './components/CartSummary';
import EmptyCart from './components/EmptyCart';
import { ICart } from './interfaces/ICart';

const Cart: FC<ICart> = () => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const idList = productList.map((product) => product.id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const cartUpdate = useSelector((state: RootState) => state.cartSlice.update);
    const dispatch = useDispatch();
    const [update, { data, isFetching, error }] =
        webCartProductList.useLazyFetchCartProductListQuery();

    //lang
    useEffect(() => {
        update({ idList, lang });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    //cart update
    useEffect(() => {
        if (cartUpdate) {
            update({ idList, lang });
            dispatch(toFalseCartUpdate());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartUpdate]);

    if (!idList || idList.length === 0)
        return (
            <div className={styles.cart}>
                <EmptyCart styles={styles} />{' '}
            </div>
        );

    return (
        <div className={styles.cartContainer}>
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
                    <CartProductList data={data} productList={productList} styles={styles} />
                    <CartSummary styles={styles} />
                    <CartMenu styles={styles} />
                </div>
            )}
        </div>
    );
};

export default Cart;
