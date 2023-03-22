import React from 'react';
import { useParams } from 'react-router-dom';
import BrandSelect from '../components/BrandSelect/BrandSelect';
import CategoriesList from '../components/Categories/CategoriesList';
import { TCategoryId } from '../models/TCategoryId';
import { routerApi } from '../services/routerService';

const CategoryPage = () => {
    const { data: allId } = routerApi.useFetchAllIdQuery();
    const categoryId = Number(useParams<TCategoryId>().categoryId);
    const hasBrands = allId?.includes(Number(categoryId));

    return (
        <div>
            {hasBrands && <BrandSelect id={categoryId} />}
            <CategoriesList />
        </div>
    );
};

export default CategoryPage;
