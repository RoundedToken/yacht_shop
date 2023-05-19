import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { ICartListFilter } from '../interfaces/ICartListFilter';
import CartListFilterItem from './CartListFilterItem';

const CartListFilter: FC<ICartListFilter> = ({ styles }) => {
    return (
        <>
            <CartListFilterItem
                styles={styles}
                value="inStock"
                name={<Text rus="В наличии" eng="In stock" est="Laos" />}
            />
        </>
    );
};

export default CartListFilter;
