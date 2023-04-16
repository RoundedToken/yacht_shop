import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BrandSelect from '../UI/BrandSelect/BrandSelect';
import CatalogTicker from '../modules/Tickers/CatalogTicker';
import { TId } from '../models/types/TId';
import { routerApi } from '../services/routerService';
import CategoryList from '../modules/CategoryList/CategoryList';

const CategoryPage = () => {
    const { data: allId } = routerApi.useFetchAllIdQuery();
    const id = Number(useParams<TId>().id);
    const hasBrands = allId?.includes(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {id === 0 && <CatalogTicker />}
            {hasBrands && <BrandSelect id={id} />}
            <CategoryList />
        </div>
    );
};

export default CategoryPage;
