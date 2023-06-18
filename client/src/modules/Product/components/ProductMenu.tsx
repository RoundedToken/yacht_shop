import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import CartButton from '../../../UI/CartButton/CartButton';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IProductName } from '../interfaces/IProductName';

const ProductMenu: FC<IProductName> = ({ styles, price, brand, id, isDecimals }) => {
    return (
        <div className={styles.menu}>
            <div className={styles.price}>{eurFormatter.format(price)}</div>

            <div className={styles.favorites}>
                <FavoritesButton id={id} />
            </div>

            <div className={styles.cart}>
                <div className={styles.cartControl}>
                    <CartButton id={id} brand={brand} price={price} isDecimals={isDecimals} />
                </div>

                <CountControl id={id} isDecimals={isDecimals} />
            </div>
        </div>
    );
};

export default ProductMenu;
