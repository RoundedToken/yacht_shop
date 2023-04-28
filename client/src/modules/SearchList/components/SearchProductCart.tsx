import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';
import trashImg from '../../../assets/images/trash.png';
import addToCartImg from '../../../assets/images/addToCart.png';
import { addToCart, removeFromCart, toTrueCartUpdate } from '../../../redux/cartSlice';
import { ISearchProductCart } from '../interfaces/ISearchProductCart';

const SearchProductCart: FC<ISearchProductCart> = ({ styles, product }) => {
    const dispatch = useDispatch();
    const inCart = useSelector((state: RootState) => state.cartSlice.productList).find(
        (cartProduct) => cartProduct.id === product.id
    );

    const addToCartOnClick = () => {
        dispatch(
            addToCart({ id: product.id, count: 1, price: product.price, brand: product.brand })
        );
        dispatch(toTrueCartUpdate());
    };
    const removeFromCartOnClick = () => {
        dispatch(removeFromCart(product.id));
    };

    return inCart ? (
        <div className={styles.remove} onClick={removeFromCartOnClick}>
            <img src={trashImg} alt="" />

            <Text rus="Убрать" eng="Remove" est="Eemalda" />
        </div>
    ) : (
        <div className={styles.addToCart} onClick={addToCartOnClick}>
            <img src={addToCartImg} alt="" />

            <Text rus="Добавить" eng="Add" est="Lisama" />
        </div>
    );
};

export default SearchProductCart;
