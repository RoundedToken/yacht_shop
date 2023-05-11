import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TId } from '../../../models/types/TId';
import { RootState } from '../../../redux/store';
import { navProductListApi } from '../../../services/navProductListService';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import { ICategoryProductList } from '../interfaces/ICategoryProductList';
import CardProductList from './CardProductList';
import TableProductList from './TableProductList';

const CategoryProductList: FC<ICategoryProductList> = ({ styles, brands, lang }) => {
    const id = Number(useParams<TId>().id);
    const listMode = useSelector((state: RootState) => state.sideBarSlice.listMode);
    const {
        data: productList,
        isFetching,
        error,
    } = navProductListApi.useFetchProductListQuery({ id, lang });

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
                    <TableProductList styles={styles} productList={productList} brands={brands} />
                ) : (
                    <CardProductList styles={styles} productList={productList} brands={brands} />
                ))}
        </>
    );
};

export default CategoryProductList;
