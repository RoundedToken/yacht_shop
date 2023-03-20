import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { navChildrenApi } from '../../services/navChildrenService';
import CategoriesItem from './CategoriesItem';

const CategoriesList = () => {
    const navId = useSelector((state: RootState) => state.navSlice.categoryId);
    const { data: categories, error, isFetching } = navChildrenApi.useFetchAllChildrenQuery(navId);

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {categories &&
                !isFetching &&
                categories.map((category) => (
                    <CategoriesItem key={category.id} id={category.id}>
                        {category.name}
                    </CategoriesItem>
                ))}
        </div>
    );
};

export default CategoriesList;
