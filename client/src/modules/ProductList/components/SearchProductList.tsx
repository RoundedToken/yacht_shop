import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TSearchQuery } from '../../../models/types/TSearchQuery';
import { RootState } from '../../../redux/store';
import { webSearchApi } from '../../../services/webSearch';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import { ISearchProductList } from '../interfaces/ISearchProductList';
import CardProductList from './CardProductList';
import TableProductList from './TableProductList';

const SearchProductList: FC<ISearchProductList> = ({ styles, brands, lang }) => {
    const searchStr = useParams<TSearchQuery>().query || '';
    const listMode = useSelector((state: RootState) => state.sideBarSlice.listMode);
    const {
        data: productList,
        isFetching,
        error,
    } = webSearchApi.useFetchProductListQuery({ searchStr, lang });

    return (
        <>
            {isFetching && (
                <div className={styles.productListGrid}>
                    {Array(8)
                        .fill(null)
                        .map((_, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                </div>
            )}
            {error && <h1>Error!</h1>}
            {!isFetching &&
                productList &&
                (productList.length === 0 ? (
                    <h1>ProductList Not Found</h1>
                ) : listMode === 'table' ? (
                    <TableProductList styles={styles} brands={brands} productList={productList} />
                ) : (
                    <CardProductList styles={styles} brands={brands} productList={productList} />
                ))}
        </>
    );
};

export default SearchProductList;
