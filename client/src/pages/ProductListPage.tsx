import React, { useEffect } from 'react';
import ProductList from '../modules/ProductList/ProductList';
import BrandSelect from '../UI/BrandSelect/BrandSelect';

const ProductListPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <BrandSelect />
            <ProductList />
        </div>
    );
};

export default ProductListPage;
