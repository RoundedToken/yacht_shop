import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ISearchBar } from '../interfaces/ISearchBar';
import HistoryMenu from './HistoryMenu';
import PageTitle from './PageTitle';
import SearchBreadcrumbs from './SearchBreadcrumbs';

const SearchBar: FC<ISearchBar> = ({ styles }) => {
    const location = useLocation().pathname.split('/')[1];
    const breadcrumbsPaths = ['category', 'product_list', 'product'];

    return (
        <div className={styles.searchBar}>
            <HistoryMenu styles={styles} />

            {breadcrumbsPaths.includes(location) ? (
                <SearchBreadcrumbs styles={styles} />
            ) : (
                <PageTitle styles={styles} />
            )}
        </div>
    );
};

export default SearchBar;
