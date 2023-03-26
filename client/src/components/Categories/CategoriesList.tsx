import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TId } from '../../models/TId';
import { setBrand } from '../../redux/navSlice';
import { RootState } from '../../redux/store';
import { navCategoriesApi } from '../../services/navCategoriesService';
import CategoriesItem from './CategoriesItem';

const CategoriesList = () => {
    const id = Number(useParams<TId>().id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const brand = useSelector((state: RootState) => state.navSlice.brand);
    const dispatch = useDispatch();

    const {
        data: categories,
        error,
        isFetching,
    } = navCategoriesApi.useFetchCategoriesQuery({
        id: id,
        brand: brand === 'notSelected' ? '' : brand,
        lang: lang,
    });

    useEffect(() => {
        return () => {
            dispatch(setBrand('notSelected'));
        };
    }, [dispatch]);

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
