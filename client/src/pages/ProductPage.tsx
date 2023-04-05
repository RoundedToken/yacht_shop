import React, { useEffect } from 'react';
import Product from '../modules/Products/Product';
import ProductInfo from '../modules/Products/ProductInfo';
import CatalogTicker from '../modules/Tickers/CatalogTicker';

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <CatalogTicker />
            <Product />
            <ProductInfo />
        </div>
    );
};

export default ProductPage;
