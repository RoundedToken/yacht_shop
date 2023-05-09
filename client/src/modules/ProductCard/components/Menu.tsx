import React, { FC } from 'react';
import CartButton from '../../../UI/CartButton/ProductCart';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IMenu } from '../interfaces/IMenu';

const Menu: FC<IMenu> = ({ styles, id, brand, price }) => {
    return (
        <div className={styles.menu}>
            <div className={`${styles.favoritesButton} ${styles.menu__item}`}>
                <FavoritesButton id={id} />
            </div>

            <div className={`${styles.countControl} ${styles.menu__item}`}>
                <CountControl id={id} />
            </div>

            <div className={`${styles.cartButton} ${styles.menu__item}`}>
                <CartButton id={id} brand={brand} price={price} />
            </div>
        </div>
    );
};

export default Menu;
