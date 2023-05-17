import React from 'react';
import { useLocation } from 'react-router-dom';
import HistoryMenu from './components/SearchInput';
import PageTitle from './components/PageTitle';
import SearchBreadcrumbs from './components/SearchBreadcrumbs';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
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
