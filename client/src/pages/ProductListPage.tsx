import React from 'react';
import { useParams } from 'react-router-dom';
import BrandSelect from '../components/Body/BrandSelect';
import ProductList from '../components/Products/ProductList';
import { TId } from '../models/TId';
import { routerApi } from '../services/routerService';

const ProductListPage = () => {
    const { data: allId } = routerApi.useFetchAllIdQuery();
    const id = Number(useParams<TId>().id);
    const hasBrands = allId?.includes(id);

    return (
        <div>
            {hasBrands && <BrandSelect id={id} />}
            <ProductList />
        </div>
    );
};

export default ProductListPage;
