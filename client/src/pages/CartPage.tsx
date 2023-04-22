import React from 'react';
import Cart from '../modules/Cart/Cart';
import styles from './pages.module.scss';

const CartPage = () => {
    return (
        <div className={styles.container}>
            <Cart />
        </div>
    );
};

export default CartPage;
