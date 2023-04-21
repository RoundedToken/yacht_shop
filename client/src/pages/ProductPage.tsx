import React, { useEffect } from 'react';
import Product from '../modules/Product/Product';
import ProductInfo from '../modules/Product/components/ProductInfo';

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Product />
            <ProductInfo />
        </div>
    );
};

export default ProductPage;
