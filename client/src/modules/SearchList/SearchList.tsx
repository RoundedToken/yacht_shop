import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TSearchQuery } from '../../models/types/TSearchQuery';
import { RootState } from '../../redux/store';
import { webSearchApi } from '../../services/webSearch';
import SearchListHeader from './components/SearchListHeader';
import SearchListItem from './components/SearchListItem';
import styles from './SearchList.module.scss';

const SearchList = () => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const searchStr = useParams<TSearchQuery>().query || '';
    const brands = useSelector((state: RootState) => state.navSlice.brands);

    const {
        data: productList,
        isFetching,
        error,
    } = webSearchApi.useFetchProductListQuery({ searchStr, lang });

    return (
        <div className={styles.searchListContainer}>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {!isFetching &&
                (productList?.length === 0 ? (
                    <h1>ProductList Not Found</h1>
                ) : (
                    <table className={styles.productList}>
                        <SearchListHeader />

                        <tbody>
                            {productList
                                ?.filter((product) =>
                                    brands.length === 0
                                        ? true
                                        : [...brands].includes(product.brand.toLowerCase())
                                )
                                .map((product) => (
                                    <SearchListItem
                                        key={product.id}
                                        product={product}
                                        styles={styles}
                                    />
                                ))}
                        </tbody>
                    </table>
                ))}
        </div>
    );
};

export default SearchList;
