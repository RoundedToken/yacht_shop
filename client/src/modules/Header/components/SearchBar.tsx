import React, { FC } from 'react';
import { ISearchBar } from '../interfaces/ISearchBar';
import HistoryMenu from './HistoryMenu';
import SearchMenu from './SearchMenu';

const SearchBar: FC<ISearchBar> = ({ styles }) => {
    return (
        <div className={styles.searchBar}>
            <HistoryMenu styles={styles} />

            <SearchMenu styles={styles} />
        </div>
    );
};

export default SearchBar;
