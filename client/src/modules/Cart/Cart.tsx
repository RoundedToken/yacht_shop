import React, { FC, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { webCartProductList } from '../../services/webCartProductList';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';
import styles from './Cart.module.scss';
import CartMenu from './components/CartMenu';
import CartProductList from './components/CartProductList';
import CartSummary from './components/CartSummary';
import EmptyCart from './components/EmptyCart';
import { ICart } from './interfaces/ICart';

const Cart: FC<ICart> = () => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const fixedOrderRef = useRef<HTMLDivElement>(null);
    const idList = productList.map((product) => product.id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const cartUpdate = useSelector((state: RootState) => state.cartSlice.update);
    const [update, { data, isFetching, error }] =
        webCartProductList.useLazyFetchCartProductListQuery();
    const { ref, inView } = useInView();

    //lang
    useEffect(() => {
        update({ idList, lang });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    //cart update
    useEffect(() => {
        if (cartUpdate) {
            update({ idList, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartUpdate]);

    useEffect(() => {
        if (fixedOrderRef.current) {
            if (inView) fixedOrderRef.current.style.display = 'none';
            else fixedOrderRef.current.style.display = 'flex';
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, fixedOrderRef.current]);

    if (!idList || idList.length === 0)
        return (
            <div className={styles.cart}>
                <EmptyCart styles={styles} />
            </div>
        );

    if (isFetching) {
        return (
            <div className={styles.cart}>
                <div className={styles.cardProductList}>
                    {idList.map((id) => (
                        <ProductCardSkeleton key={id} />
                    ))}
                </div>

                <div ref={ref} className={styles.orderContainer}>
                    <CartSummary styles={styles} />

                    <CartMenu styles={styles} />
                </div>

                <div ref={fixedOrderRef} className={styles.fixedOrder}>
                    <CartSummary styles={styles} />

                    <CartMenu styles={styles} />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.cartContainer}>
            {error && <h1>Error!</h1>}
            {data && (
                <div className={styles.cart}>
                    <CartProductList styles={styles} data={data} productList={productList} />

                    <div ref={ref} className={styles.orderContainer}>
                        <CartSummary styles={styles} />

                        <CartMenu styles={styles} />
                    </div>

                    <div ref={fixedOrderRef} className={styles.fixedOrder}>
                        <CartSummary styles={styles} />

                        <CartMenu styles={styles} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
