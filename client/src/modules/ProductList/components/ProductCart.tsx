import React, { FC } from 'react';
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
        </div>
    ) : (
        <div
            className={styles.addToCart}
            onClick={() => addToCartOnClick(product.id, product.price, product.brand)}
        >
            <img src={addToCartImg} alt="" />
        </div>
    );
};

export default ProductCart;
