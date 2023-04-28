import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import trashImg from '../../../assets/images/trash.png';
import addToCartImg from '../../../assets/images/addToCart.png';
import { IProductCart } from '../interfaces/IProductCart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { addToCart, removeFromCart, toTrueCartUpdate } from '../../../redux/cartSlice';

const ProductCart: FC<IProductCart> = ({ styles, product }) => {
    const cartProductList = useSelector((state: RootState) => state.cartSlice.productList);
    const dispatch = useDispatch();

    const addToCartOnClick = (id: number, price: number, brand: string) => {
        dispatch(addToCart({ id, count: 1, price, brand }));
        dispatch(toTrueCartUpdate());
    };
    const removeFromCartOnClick = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return cartProductList.find((cartProduct) => cartProduct.id === product.id) ? (
        <div className={styles.remove} onClick={() => removeFromCartOnClick(product.id)}>
            <img src={trashImg} alt="" />

            <Text rus="Убрать" eng="Remove" est="Eemalda" />
        </div>
    ) : (
        <div
            className={styles.addToCart}
            onClick={() => addToCartOnClick(product.id, product.price, product.brand)}
        >
            <img src={addToCartImg} alt="" />

            <Text rus="Добавить" eng="Add" est="Lisama" />
        </div>
    );
};

export default ProductCart;
