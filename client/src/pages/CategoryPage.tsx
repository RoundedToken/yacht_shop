import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesList from '../components/Categories/CategoriesList';
import { setNavId } from '../redux/navSlice';

interface ICategoryPage {
    id: number;
}

const CategoryPage: FC<ICategoryPage> = ({ id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavId(id));
    }, [dispatch, id]);

    return (
        <div>
            <CategoriesList />
        </div>
    );
};

export default CategoryPage;
