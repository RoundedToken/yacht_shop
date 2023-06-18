import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CartButton from '../../../UI/CartButton/CartButton';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IMenu } from '../interfaces/IMenu';

const Menu: FC<IMenu> = ({ styles, id, brand, price, isDecimals }) => {
    const count = useSelector(
        (state: RootState) =>
            state.cartSlice.productList.find((product) => product.id === id)?.count
    );

    return (
        <div className={styles.menu}>
            <div className={`${styles.cartButton} ${styles.menu__item}`}>
                <CartButton id={id} brand={brand} price={price} isDecimals={isDecimals} />
            </div>

            <div
                style={!count ? { display: 'none' } : {}}
                className={`${styles.countControl} ${styles.menu__item}`}
            >
                <CountControl id={id} isDecimals={isDecimals} />
            </div>

            <div className={`${styles.favoritesButton} ${styles.menu__item}`}>
                <FavoritesButton id={id} />
            </div>
        </div>
    );
};

export default Menu;
