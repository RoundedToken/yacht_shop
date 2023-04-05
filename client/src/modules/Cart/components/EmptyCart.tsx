import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import catalogImg from '../../../assets/HeaderImg/catalog.png';
import restoreImg from '../../../assets/CartImg/restore.png';
import { IEmptyCart } from '../interfaces/IEmptyCart';
import { RootState } from '../../../redux/store';
import { restoreCart } from '../../../redux/cartSlice';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../Text/Text';

const EmptyCart: FC<IEmptyCart> = ({ styles }) => {
    const dispatch = useDispatch();
    const isCopy =
        useSelector((state: RootState) => state.cartSlice.productListCopy).length === 0
            ? false
            : true;

    const restoreCartOnClick = () => {
        dispatch(restoreCart());
    };

    return (
        <div className={styles.emptyCart}>
            <div className={styles.emptyCartTitle}>
                <Text rus="Корзина пустая" eng="Cart is empty" est="Ostukorv on tühi" />
            </div>

            <div className={styles.emptyCartMenu}>
                {isCopy && (
                    <div className={styles.restoreCart} onClick={restoreCartOnClick}>
                        <img src={restoreImg} alt="" />
                        <Text
                            rus="Восстановить корзину"
                            eng="Restore cart"
                            est="Taasta ostukorvi"
                        />
                    </div>
                )}

                <Link to={routeConstants.CATEGORIES_ROUTE} className={styles.toCatalog}>
                    <img src={catalogImg} alt="" />
                    <Text rus="Перейти в каталог" eng="Go to catalog" est="Mine kataloogi" />
                </Link>
            </div>
        </div>
    );
};

export default EmptyCart;
