import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import closeImg from '../../../assets/images/close.png';
import { routeConstants } from '../../../models/enums/EConstants';
import { removeFromCart } from '../../../redux/cartSlice';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { ICartProduct } from '../interfaces/ICartProduct';

const CartProduct: FC<ICartProduct> = ({ id, styles, src, name, price, count }) => {
    const formatter = new Intl.NumberFormat('et', {
        style: 'currency',
        currency: 'EUR',
    });
    const dispatch = useDispatch();

    const removeOnClick = () => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <tr>
                <td colSpan={6}>
                    <hr />
                </td>
            </tr>
            <tr className={styles.cartProduct}>
                <td>
                    <Link
                        className={styles.productName}
                        to={routeConstants.PRODUCT_ROUTE + `/${id}`}
                    >
                        <img className={styles.productImg} src={src} alt="" />
                        {name}
                    </Link>
                </td>

                <td>
                    <CountControl id={id} />
                </td>

                <td className={styles.productPrice}>{formatter.format(price)}</td>

                <td className={styles.totalAmount}>{formatter.format(count * price)}</td>

                <td>
                    <FavoritesButton id={id} />
                </td>

                <td>
                    <img src={closeImg} onClick={removeOnClick} className={styles.remove} alt="" />
                </td>
            </tr>
        </>
    );
};

export default CartProduct;
