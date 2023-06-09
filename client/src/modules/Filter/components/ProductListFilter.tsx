import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IProductListFilter } from '../interfaces/IProductListFilter';
import ProductListFilterItem from './ProductListFilterItem';

const ProductListFilter: FC<IProductListFilter> = ({ styles }) => {
    return (
        <>
            <ProductListFilterItem
                styles={styles}
                value="inStock"
                name={<Text rus="В наличии" eng="In stock" est="Laos" />}
            />
        </>
    );
};

export default ProductListFilter;
