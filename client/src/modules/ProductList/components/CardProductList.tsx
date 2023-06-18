import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import ProductCard from '../../ProductCard/ProductCard';
import { productListFilter } from '../helpers/productListFilter';
import { productListSort } from '../helpers/productListSort';
import { ICardProductList } from '../interfaces/ICardProductList';

const CardProductList: FC<ICardProductList> = ({ styles, productList, brands }) => {
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
        <div className={styles.productListGrid}>
            {sortedProductList.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    code={product.code}
                    price={product.price}
                    count={
                        cartProductList.find((cartProduct) => cartProduct.id === product.id)
                            ?.count as number
                    }
                    inStock={product.inStock}
                    isDecimals={product.isDecimals}
                    src={product.src}
                />
            ))}
        </div>
    );
};

export default CardProductList;
