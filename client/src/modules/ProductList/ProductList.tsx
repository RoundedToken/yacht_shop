import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TId } from '../../models/types/TId';
import { setBrand } from '../../redux/navSlice';
import { RootState } from '../../redux/store';
import { navProductListApi } from '../../services/navProductListService';
import { setCartFromStorage } from '../../redux/cartSlice';
import styles from './ProductList.module.scss';
import ProductListHeader from './components/ProductListHeader';
import ProductListItem from './components/ProductListItem';

const ProductList = () => {
    const id = Number(useParams<TId>().id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const brand = useSelector((state: RootState) => state.navSlice.brand);
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

    useEffect(() => {
        const setCart = () => dispatch(setCartFromStorage());

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
                        <ProductListHeader />

                        <tbody>
                            {productList.map((product) => (
                                <ProductListItem product={product} />
                            ))}
                        </tbody>
                    </table>
                ))}
        </div>
    );
};

export default ProductList;
