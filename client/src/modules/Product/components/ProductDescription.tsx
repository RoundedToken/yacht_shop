import React, { FC } from 'react';
import { IProductDescription } from '../interfaces/IProductDescription';
import ProductBrand from './ProductBrand';
import ProductDetail from './ProductDetail';
import ProductMenu from './ProductMenu';

const ProductDescription: FC<IProductDescription> = ({ styles, product }) => {
    return (
        <div className={styles.description}>
            <div className={styles.descriptionName}>{product.name}</div>

            <ProductBrand styles={styles} brand={product.brand} brandLogo={product.brandLogo} />

            <ProductDetail
                styles={styles}
                inStock={product.inStock}
                inStockCount={product.inStockCount}
                code={product.code}
            />

            <ProductMenu
                styles={styles}
                id={product.id}
                price={product.price}
                brand={product.brand}
            />
        </div>
    );
};

export default ProductDescription;
