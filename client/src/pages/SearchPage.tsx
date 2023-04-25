import React from 'react';
import SearchList from '../modules/SearchList/SearchList';
import styles from './pages.module.scss';

const SearchPage = () => {
    return (
        <div className={styles.container}>
            <SearchList />
        </div>
    );
};

export default SearchPage;
