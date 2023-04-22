/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { navProductApi } from '../../../services/navProductService';
import { ISearchBreadcrumbs } from '../interfaces/ISearchBreadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';

const SearchBreadcrumbs: FC<ISearchBreadcrumbs> = ({ styles }) => {
    const location = useLocation().pathname.split('/');
    const isLocation = location[1] === 'product';
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const id = Number(location[2]);
    const [updateProduct, { data: product, isFetching, error }] =
        navProductApi.useLazyFetchProductQuery();
    const category = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (category) => (isLocation ? category.id === product?.parentId : category.id === id)
    );

    useEffect(() => {
        if (isLocation) updateProduct({ id, lang });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className={styles.breadcrumbs}>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {!isFetching &&
                category?.routes.map((route) => (
                    <BreadcrumbsItem
                        key={route.id}
                        styles={styles}
                        id={route.id}
                        name={route.name}
                        hasChildren={route.hasChildren ? true : false}
                    />
                ))}
            {product && !isFetching && isLocation && (
                <div className={styles.breadcrumbsItem}>
                    <a>{product.name}</a>
                </div>
            )}
        </div>
    );
};

export default SearchBreadcrumbs;
