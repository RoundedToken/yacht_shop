import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import closeImg from '../../../assets/CartImg/close.png';
import { routeConstants } from '../../../models/enums/EConstants';
import { removeFromCart } from '../../../redux/cartSlice';
import { RootState } from '../../../redux/store';
import CountControl from '../../CountControl/CountControl';
import { ICartProduct } from '../interfaces/ICartProduct';

const CartProduct: FC<ICartProduct> = ({ id, styles, src, name, price }) => {
    const count =
        useSelector(
            (state: RootState) =>
                state.cartSlice.productList.find((product) => product.id === id)?.count
        ) ?? 0;
    const dispatch = useDispatch();

    const removeOnClick = () => {
        dispatch(removeFromCart(id));
    };

    return (
        <tr className={styles.cartProduct}>
            <td className={styles.productName}>
                <Link to={routeConstants.PRODUCT_ROUTE + `/${id}`}>
                    <img className={styles.productImg} src={src} alt="" />
                </Link>
                
                <Link to={routeConstants.PRODUCT_ROUTE + `/${id}`}>{name}</Link>
            </td>

            <td>
                <CountControl id={id} />
            </td>

            <td className={styles.productPrice}>{price.toFixed(2)}&nbsp;&euro;</td>

            <td className={styles.totalAmount}>{(count * price).toFixed(2)}&nbsp;&euro;</td>

            <td>
                <img src={closeImg} onClick={removeOnClick} className={styles.remove} alt="" />
            </td>
        </tr>
    );
};

export default CartProduct;
