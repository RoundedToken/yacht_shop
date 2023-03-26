import React from 'react';
import { useParams } from 'react-router-dom';
import BrandSelect from '../components/Body/BrandSelect';
import CatalogTicker from '../components/Tickers/CatalogTicker';
import CategoriesList from '../components/Categories/CategoriesList';
import { TId } from '../models/TId';
import { routerApi } from '../services/routerService';

const CategoryPage = () => {
    const { data: allId } = routerApi.useFetchAllIdQuery();
    const id = Number(useParams<TId>().id);
    const hasBrands = allId?.includes(id);

    return (
        <div>
            {id === 0 && <CatalogTicker />}
            {hasBrands && <BrandSelect id={id} />}
            <CategoriesList />
        </div>
    );
};

export default CategoryPage;
