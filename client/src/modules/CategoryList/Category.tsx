import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import { TId } from '../../models/types/TId';
import { RootState } from '../../redux/store';
import CategoryList from './components/CategoryList';
import styles from './Category.module.scss';

const Category = () => {
    const id = Number(useParams<TId>().id);
    const category = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (category) => category.id === id
    );

    return (
        <>
            {category?.children && (
                <CategoryList categoryChildren={category.children} styles={styles} />
            )}
            {category && !category.children && id !== 0 && (
                <Navigate to={routeConstants.PRODUCT_LIST_ROUTE + `/${id}`} />
            )}
        </>
    );
};

export default Category;
