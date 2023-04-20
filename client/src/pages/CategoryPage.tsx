import React, { useEffect } from 'react';
import CategoryList from '../modules/CategoryList/CategoryList';
import BrandSelect from '../UI/BrandSelect/BrandSelect';

const CategoryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <BrandSelect />
            <CategoryList />
        </div>
    );
};

export default CategoryPage;
