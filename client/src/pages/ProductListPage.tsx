import React from 'react';
import { useParams } from 'react-router-dom';
import BrandSelect from '../components/BrandSelect/BrandSelect';
import ProductList from '../components/Products/ProductList';
import { TProductListId } from '../models/TProductListId';
import { routerApi } from '../services/routerService';

const ProductListPage = () => {
    const { data: allId } = routerApi.useFetchAllIdQuery();
    const productListId = Number(useParams<TProductListId>().productListId);
    const hasBrands = allId?.includes(Number(productListId));

    return (
        <div>
            {hasBrands && <BrandSelect id={productListId} />}
            <ProductList />
        </div>
    );
};

export default ProductListPage;
