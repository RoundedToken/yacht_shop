import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TCategoryId } from '../../models/TCategoryId';
import { RootState } from '../../redux/store';
import { navCategoriesApi } from '../../services/navCategoriesService';
import CategoriesItem from './CategoriesItem';

const CategoriesList = () => {
    const params = useParams<TCategoryId>();
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    const {
        data: categories,
        error,
        isFetching,
    } = navCategoriesApi.useFetchCategoriesQuery({
        id: Number(params.categoryId),
        brand: '',
        lang: lang,
    });

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {categories &&
                !isFetching &&
                categories.map((category) => (
                    <CategoriesItem
                        key={category.id}
                        id={category.id}
                        hasChildren={category.hasChildren}
                        src={category.src}
                    >
                        {category.name}
                    </CategoriesItem>
                ))}
        </div>
    );
};

export default CategoriesList;
