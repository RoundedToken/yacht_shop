import React from 'react';
import Product from '../components/Products/Product';
import ProductInfo from '../components/Products/ProductInfo';
import CatalogTicker from '../components/Tickers/CatalogTicker';

const ProductPage = () => {
    return (
        <div>
            <CatalogTicker />
            <Product />
            <ProductInfo />
        </div>
    );
};

export default ProductPage;
