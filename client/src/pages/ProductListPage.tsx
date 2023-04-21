import React, { useEffect } from 'react';
import ProductList from '../modules/ProductList/ProductList';

const ProductListPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <ProductList />
        </div>
    );
};

export default ProductListPage;
