import React, { FC, useRef } from 'react';
import { IProductDescription } from '../interfaces/IProductDescription';
import ProductSwiper from './ProductSwiper';
import defaultBrandImg from '../../../assets/images/defaultBrand.png';
import Text from '../../../UI/Text/Text';

const ProductDescription: FC<IProductDescription> = ({ styles, product }) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const onImgError = () => {
        if (imgRef.current) {
            imgRef.current.src = defaultBrandImg;
            imgRef.current.className = styles.defaultProductPic;
        }
    };
    return (
        <div className={styles.description}>
            <ProductSwiper styles={styles} picSrc={product.src} />

            <div className={styles.details}>
                <div className={styles.name}>{product.name}</div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>
                        <Text rus="В наличии" eng="In stock" est="Laos" />
                    </div>

                    <div className={styles.inStock}>
                        {product.inStock ? (
                            <Text rus="Да" eng="Yes" est="Jah" />
                        ) : (
                            <Text rus="Нет" eng="No" est="Ei" />
                        )}
                    </div>
                </div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>
                        <Text rus="Количество в наличии" eng="Quantity in stock" est="Kogus laos" />
                    </div>

                    <div className={styles.count}>{product.inStockCount}</div>
                </div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>
                        {' '}
                        <Text rus="Код" eng="Code" est="Kood" />
                    </div>

                    <div className={styles.code}>{product.code}</div>
                </div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>
                        <Text rus="Бренд" eng="Brand" est="Brändi" />
                    </div>

                    <div className={styles.brand}>{product.brand}</div>
                </div>

                <div className={styles._mobileBrandLogo}>
                    <img ref={imgRef} src={product.brandLogo} alt="" onError={onImgError} />
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
