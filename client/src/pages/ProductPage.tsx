import React, { useEffect } from 'react';
import Product from '../modules/Product/Product';
import ProductInfo from '../modules/Product/components/ProductInfo';
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
