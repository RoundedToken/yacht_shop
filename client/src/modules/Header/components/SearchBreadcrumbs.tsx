import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { ISearchBreadcrumbs } from '../interfaces/ISearchBreadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';

const SearchBreadcrumbs: FC<ISearchBreadcrumbs> = ({ styles }) => {
    const location = useLocation().pathname.split('/');
    const id = Number(location[2]);
    const category = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (category) => (location[1] === 'product' ? category.parentId === id : category.id === id)
    );

    return (
        <div className={styles.breadcrumbs}>
            {category?.routes.map((route) => (
                <BreadcrumbsItem
                    key={route.id}
                    styles={styles}
                    id={route.id}
                    name={route.name}
                    hasChildren={route.hasChildren ? true : false}
                />
            ))}
        </div>
    );
};

export default SearchBreadcrumbs;
