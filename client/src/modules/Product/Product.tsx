import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TId } from '../../models/types/TId';
import { RootState } from '../../redux/store';
import { navProductApi } from '../../services/navProductService';
import ProductNotFound from './components/ProductNotFound';
import styles from './Product.module.scss';
import ProductInfo from './components/ProductInfo';
import ProductSwiper from './components/ProductSwiper';
import ProductDescription from './components/ProductDescription';

const Product = () => {
    const id = Number(useParams<TId>().id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data: product, isFetching, error } = navProductApi.useFetchProductQuery({ id, lang });

    return (
        <>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {product &&
                !isFetching &&
                (product.name ? (
                    <>
                        <div className={styles.productContainer}>
                            <ProductSwiper styles={styles} picSrc={product.src} />

                            <ProductDescription styles={styles} product={product} />
                        </div>

                        <ProductInfo styles={styles} />
                    </>
                ) : (
                    <ProductNotFound />
                ))}
        </>
    );
};

export default Product;
