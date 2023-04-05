import React, { useEffect } from 'react';
import Cart from '../modules/Cart/Cart';
import CartTicker from '../modules/Tickers/CartTicker';

const CartPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <CartTicker />

            <Cart />
        </div>
    );
};

export default CartPage;
