import React from 'react';
import Text from '../Text/Text';
import styles from './Ticker.module.scss';

const CartTicker = () => {
    return (
        <div className={styles.Ticker__Container}>
            <div className={styles.Ticker}>
                <div className={styles.Ticker__Wrapper}>
                    <Text
                        rus="корзина &#9679; КОРЗИНА &#9679; корзина &#9679; КОРЗИНА &#9679; корзина &#9679; КОРЗИНА &#9679; "
                        eng="cart &#9679; CART &#9679; cart &#9679; CART &#9679; cart &#9679; CART &#9679; cart &#9679; CART &#9679; "
                        est="ostukorv &#9679; OSTUKORV  &#9679; ostukorv &#9679; OSTUKORV  &#9679;ostukorv &#9679; OSTUKORV  &#9679; "
                    />
                    <Text
                        rus="корзина &#9679; КОРЗИНА &#9679; корзина &#9679; КОРЗИНА &#9679; корзина &#9679; КОРЗИНА &#9679; "
                        eng="cart &#9679; CART &#9679; cart &#9679; CART &#9679; cart &#9679; CART &#9679; "
                        est="ostukorv &#9679; OSTUKORV &#9679; ostukorv &#9679; OSTUKORV &#9679;ostukorv &#9679; OSTUKORV &#9679; "
                    />
                    <Text
                        rus="корзина &#9679; КОРЗИНА &#9679; корзина &#9679; КОРЗИНА &#9679; корзина &#9679; КОРЗИНА &#9679; "
                        eng="cart &#9679; CART &#9679; cart &#9679; CART &#9679; cart &#9679; CART &#9679; "
                        est="ostukorv &#9679; OSTUKORV &#9679; ostukorv &#9679; OSTUKORV &#9679;ostukorv &#9679; OSTUKORV &#9679; "
                    />
                </div>
            </div>
        </div>
    );
};

export default CartTicker;
