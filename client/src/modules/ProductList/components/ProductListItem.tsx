import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { addToCart, removeFromCart, toTrueCartUpdate } from '../../../redux/cartSlice';
import { RootState } from '../../../redux/store';
import CountControl from '../../../UI/CountControl/CountControl';
import { IProductListItem } from '../interfaces/IProductListItem';

const ProductListItem: FC<IProductListItem> = ({ product }) => {
    const cartProductList = useSelector((state: RootState) => state.cartSlice.productList);
    const dispatch = useDispatch();

    const addToCartOnClick = (id: number, price: number) => {
        dispatch(addToCart({ id, count: 1, price }));
        dispatch(toTrueCartUpdate());
    };
    const removeFromCartOnClick = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <tr key={product.id}>
            <td>
                <img src={product.src} alt="" width={64} height={64} />
            </td>

            <td> {product.name}</td>

            <td>{product.brand}</td>

            <td>{product.code}</td>

            <td>{product.price}</td>

            <td>{product.inStock ? 'Yes' : 'No'}</td>

            <td>
                {cartProductList.find((cartProduct) => cartProduct.id === product.id) ? (
                    <button onClick={() => removeFromCartOnClick(product.id)}>Remove</button>
                ) : (
                    <button onClick={() => addToCartOnClick(product.id, product.price)}>Add</button>
                )}
            </td>

            <td>
                <CountControl id={product.id} />
            </td>

            <td>
                <Link to={routeConstants.PRODUCT_ROUTE + `/${product.id}`}>To info</Link>
            </td>
        </tr>
    );
};

export default ProductListItem;
