import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { addToCart, removeFromCart, toTrueCartUpdate } from '../../../redux/cartSlice';
import { ISearchListItem } from '../interfaces/ISearchListItem';
import closeImg from '../../../assets/images/close.png';
import checkImg from '../../../assets/images/check.png';
import trashImg from '../../../assets/images/trash.png';
import addToCartImg from '../../../assets/images/addToCart.png';
import Text from '../../../UI/Text/Text';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { RootState } from '../../../redux/store';

const SearchListItem: FC<ISearchListItem> = ({ product, styles }) => {
    const formatter = new Intl.NumberFormat('et', {
        style: 'currency',
        currency: 'EUR',
    });
    const cartProductList = useSelector((state: RootState) => state.cartSlice.productList);
    const dispatch = useDispatch();

    const addToCartOnClick = (id: number, price: number, brand: string) => {
        dispatch(addToCart({ id, count: 1, price, brand }));
        dispatch(toTrueCartUpdate());
    };
    const removeFromCartOnClick = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <tr>
                <td colSpan={8}>
                    {' '}
                    <hr />
                </td>
            </tr>
            <tr>
                <td className={styles.productName}>
                    <Link to={routeConstants.PRODUCT_ROUTE + `/${product.id}`}>
                        {' '}
                        <img src={product.src} alt="" />
                    </Link>
                    <Link to={routeConstants.PRODUCT_ROUTE + `/${product.id}`}>
                        {' '}
                        {product.name}
                    </Link>
                </td>

                <td>{product.brand}</td>

                <td>{product.code}</td>

                <td>{formatter.format(product.price)}</td>

                <td className={styles.productInStock}>
                    {product.inStock ? (
                        <img className={styles.checkImg} src={checkImg} alt="" />
                    ) : (
                        <img className={styles.closeImg} src={closeImg} alt="" />
                    )}
                </td>

                <td>
                    <FavoritesButton id={product.id} brand={product.brand} />
                </td>

                <td className={styles.productCart}>
                    {cartProductList.find((cartProduct) => cartProduct.id === product.id) ? (
                        <div
                            className={styles.remove}
                            onClick={() => removeFromCartOnClick(product.id)}
                        >
                            <img src={trashImg} alt="" />
                            <Text rus="Убрать" eng="Remove" est="Eemalda" />
                        </div>
                    ) : (
                        <div
                            className={styles.addToCart}
                            onClick={() =>
                                addToCartOnClick(product.id, product.price, product.brand)
                            }
                        >
                            <img src={addToCartImg} alt="" />
                            <Text rus="Добавить" eng="Add" est="Lisama" />
                        </div>
                    )}
                </td>
                <td>
                    <CountControl id={product.id} />
                </td>
            </tr>
        </>
    );
};

export default SearchListItem;
