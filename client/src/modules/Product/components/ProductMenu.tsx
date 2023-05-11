import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import CartButton from '../../../UI/CartButton/CartButton';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IProductName } from '../interfaces/IProductName';

const ProductMenu: FC<IProductName> = ({ styles, price, brand, id }) => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuPrice}>{eurFormatter.format(price)}</div>

            <FavoritesButton id={id} />

            <CartButton id={id} brand={brand} price={price} />

            <CountControl id={id} />
        </div>
    );
};

export default ProductMenu;
