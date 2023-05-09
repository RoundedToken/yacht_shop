import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import ProductCard from '../../ProductCard/ProductCard';
import { cartListFilter } from '../helpers/cartListFilter';
import { cartSort } from '../helpers/cartSort';
import { ICartProductList } from '../interfaces/ICartProductList';

const CartProductList: FC<ICartProductList> = ({ styles, productList, data }) => {
    const brands = useSelector((state: RootState) => state.sideBarSlice.cartBrands);
    const filters = useSelector((state: RootState) => state.sideBarSlice.cartListFilters);
    const favoritesList = useSelector((state: RootState) => state.favoritesSlice.favoritesList);
    const filteredList = cartListFilter(productList, brands, filters, favoritesList);
    const sortRules = useSelector((state: RootState) => state.sideBarSlice.cartSorting);
    const sortedList = cartSort(filteredList, data, sortRules);

    return (
        <div className={styles.cardProductList}>
            {sortedList.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={data.find((item) => item.id === product.id)?.name || ''}
                    src={data.find((item) => item.id === product.id)?.src || []}
                    price={product.price}
                    count={product.count}
                    brand={data.find((item) => item.id === product.id)?.brand || ''}
                    code={data.find((item) => item.id === product.id)?.code || ''}
                    inStock={data.find((item) => item.id === product.id)?.inStock || false}
                />
            ))}
        </div>
    );
};

export default CartProductList;
