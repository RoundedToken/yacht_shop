import React, { useEffect } from 'react';
import CategoryList from '../modules/CategoryList/CategoryList';

const CategoryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <CategoryList />
        </div>
    );
};

export default CategoryPage;
