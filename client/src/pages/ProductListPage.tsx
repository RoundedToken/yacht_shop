import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BrandSelect from '../modules/BrandSelect/BrandSelect';
import ProductList from '../modules/ProductList/ProductList';
import { TId } from '../models/types/TId';
import { routerApi } from '../services/routerService';

const ProductListPage = () => {
    const { data: allId } = routerApi.useFetchAllIdQuery();
    const id = Number(useParams<TId>().id);
    const hasBrands = allId?.includes(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {hasBrands && <BrandSelect id={id} />}
            <ProductList />
        </div>
    );
};

export default ProductListPage;
