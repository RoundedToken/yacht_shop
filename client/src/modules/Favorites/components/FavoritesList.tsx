import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import ProductCard from '../../ProductCard/ProductCard';
import { favoritesFilter } from '../helpers/favoritesFilter';
import { favoritesSort } from '../helpers/favoritesSort';
import { ITableFavoritesList } from '../interfaces/ITableFavoritesList';

const FavoritesList: FC<ITableFavoritesList> = ({ styles, data, brands }) => {
    const cartList = useSelector((state: RootState) => state.cartSlice.productList);
    const filters = useSelector((state: RootState) => state.sideBarSlice.favoritesFilters);
    const filteredData = favoritesFilter(data, brands, filters);
    const sortRules = useSelector((state: RootState) => state.sideBarSlice.favoritesSorting);
    const sortedData = favoritesSort(filteredData, sortRules);

    return (
        <div className={styles.favoritesList}>
            {sortedData.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    code={product.code}
                    price={product.price}
                    count={
                        cartList.find((cartProduct) => cartProduct.id === product.id)
                            ?.count as number
                    }
                    inStock={product.inStock}
                    src={product.src}
                />
            ))}
        </div>
    );
};

export default FavoritesList;
