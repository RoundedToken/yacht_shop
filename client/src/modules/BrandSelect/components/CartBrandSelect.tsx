import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { sortByBrands } from '../helpers/sortByBrands';
import { ICartBrandSelect } from '../interfaces/ICartBrandSelect';
import BrandSelectItem from './BrandSelectItem';

const CartBrandSelect: FC<ICartBrandSelect> = ({ styles, selectedBrands, brandOnChange }) => {
    const cartListBrands = useSelector((state: RootState) => state.cartSlice.productList).map(
        (product) => product.brand
    );

    return (
        <>
            {sortByBrands(Array.from(new Set([...cartListBrands])), selectedBrands)?.map(
                (brand) => (
                    <BrandSelectItem
                        key={brand}
                        styles={styles}
                        brand={brand}
                        selectedBrands={selectedBrands}
                        brandOnChange={brandOnChange}
                    />
                )
            )}
        </>
    );
};

export default CartBrandSelect;
