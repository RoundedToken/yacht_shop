import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { productListFilter } from '../helpers/productListFilter';
import { productListSort } from '../helpers/productListSort';
import { ITableProductList } from '../interfaces/ITableProductList';
import ProductListHeader from './ProductListHeader';
import ProductListItem from './ProductListItem';

const TableProductList: FC<ITableProductList> = ({ styles, productList, brands }) => {
    const filters = useSelector((state: RootState) => state.sideBarSlice.productListFilters);
    const cartProductList = useSelector((state: RootState) => state.cartSlice.productList);
    const favoritesIdList = useSelector((state: RootState) => state.favoritesSlice.favoritesList);
    const filteredProductList = productListFilter(
        productList,
        brands,
        cartProductList,
        filters,
        favoritesIdList
    );
    const sortRules = useSelector((state: RootState) => state.sideBarSlice.productListSorting);
    const sortedProductList = productListSort(filteredProductList, sortRules);

    return (
        <table className={styles.productList}>
            <ProductListHeader />

            <tbody>
                {sortedProductList.map((product) => (
                    <ProductListItem key={product.id} product={product} styles={styles} />
                ))}
            </tbody>
        </table>
    );
};

export default TableProductList;
