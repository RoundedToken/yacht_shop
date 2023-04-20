import React, { FC } from 'react';
import { ISearchBar } from '../interfaces/ISearchBar';
import HistoryMenu from './HistoryMenu';
import SearchBreadcrumbs from './SearchBreadcrumbs';

const SearchBar: FC<ISearchBar> = ({ styles }) => {
    return (
        <div className={styles.searchBar}>
            <HistoryMenu styles={styles} />

            <SearchBreadcrumbs styles={styles} />
        </div>
    );
};

export default SearchBar;
