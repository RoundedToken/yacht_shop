import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TId } from '../../models/types/TId';
import { RootState } from '../../redux/store';
import { navProductApi } from '../../services/navProductService';
import ProductNotFound from './components/ProductNotFound';
import styles from './Product.module.scss';
import ProductInfo from './components/ProductInfo';
import RelatedProducts from './components/RelatedProducts';
import defaultBrandImg from '../../assets/images/defaultBrand.png';
import ProductMenu from './components/ProductMenu';
import ProductDescription from './components/ProductDescription';
import ProductSkeleton from './components/ProductSkeleton';

const Product = () => {
    const id = Number(useParams<TId>().id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data: product, isFetching, error } = navProductApi.useFetchProductQuery({ id, lang });
    const imgRef = useRef<HTMLImageElement>(null);

    const onImgError = () => {
        if (imgRef.current) {
            imgRef.current.src = defaultBrandImg;
            imgRef.current.className = styles.defaultProductPic;
        }
    };

    if (isFetching)
        return (
            <div className={styles.rootContainer}>
                <ProductSkeleton styles={styles} />
            </div>
        );

    return (
        <div className={styles.rootContainer}>
            {error && <h1>Error!</h1>}
            {product &&
                !isFetching &&
                (product.name ? (
                    <div className={styles.grid}>
                        <ProductMenu
                            styles={styles}
                            id={product.id}
                            brand={product.brand}
                            price={product.price}
                        />

                        <ProductDescription styles={styles} product={product} />

                        <div className={styles.brandLogo}>
                            <img ref={imgRef} src={product.brandLogo} alt="" onError={onImgError} />
                        </div>

                        <div className={styles.info}>
                            <ProductInfo styles={styles} />
                        </div>

                        <RelatedProducts styles={styles} id={product.id} />
                    </div>
                ) : (
                    <ProductNotFound />
                ))}
        </div>
    );
};

export default Product;
