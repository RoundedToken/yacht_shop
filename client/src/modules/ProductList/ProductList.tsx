import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { TId } from '../../models/types/TId';
import { setBrand } from '../../redux/navSlice';
import { RootState } from '../../redux/store';
import { routeConstants } from '../../models/enums/EConstants';
import { navProductListApi } from '../../services/navProductListService';
import { addToCart, removeFromCart, setCartFromStorage } from '../../redux/cartSlice';
import styles from './ProductList.module.scss';
import CountControl from '../CountControl/CountControl';

const ProductList = () => {
    const id = Number(useParams<TId>().id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const brand = useSelector((state: RootState) => state.navSlice.brand);
    const cartProductList = useSelector((state: RootState) => state.cartSlice.productList);
    const dispatch = useDispatch();

    const {
        data: productList,
        isFetching,
        error,
    } = navProductListApi.useFetchProductListQuery({
        subr: id,
        brand: brand === 'notSelected' ? '' : brand,
        fw: '',
        inSubr: '',
        ip: '',
        lang: lang,
    });

    const addToCartOnClick = (id: number, price: number) => {
        dispatch(addToCart({ id, count: 1, price }));
    };

    const removeFromCartOnClick = (id: number) => {
        dispatch(removeFromCart(id));
    };

    useEffect(() => {
        const setCart = () =>
            dispatch(setCartFromStorage(JSON.parse(localStorage.cartProductList)));

        window.addEventListener('storage', setCart);

        return () => {
            window.removeEventListener('storage', setCart);
        };
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(setBrand('notSelected'));
        };
    }, [dispatch]);

    return (
        <div className={styles.Product__List__Container}>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {productList &&
                !isFetching &&
                (productList.length === 0 ? (
                    <h1>ProductList Not Found</h1>
                ) : (
                    <table className={styles.Product__List}>
                        <thead>
                            <tr>
                                <th>Pic</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Code</th>
                                <th>Price, EUR</th>
                                <th>In stock</th>
                                <th>Cart</th>
                                <th>Count</th>
                                <th>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product) => (
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
                                        {cartProductList.find(
                                            (cartProduct) => cartProduct.id === product.id
                                        ) ? (
                                            <button
                                                onClick={() => removeFromCartOnClick(product.id)}
                                            >
                                                Remove
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    addToCartOnClick(product.id, product.price)
                                                }
                                            >
                                                Add
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <CountControl id={product.id} />
                                    </td>
                                    <td>
                                        <Link to={routeConstants.PRODUCT_ROUTE + `/${product.id}`}>
                                            To info
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
        </div>
    );
};

export default ProductList;
