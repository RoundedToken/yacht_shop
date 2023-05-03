import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { ICartListFilter } from '../interfaces/ICartListFilter';
import CartListFilterItem from './CartListFilterItem';

const CartListFilter: FC<ICartListFilter> = ({ styles }) => {
    return (
        <>
            <CartListFilterItem
                styles={styles}
                value="inFavorites"
                name={<Text rus="В избранных" eng="Featured" est="Esiletõstetud" />}
            />

            <CartListFilterItem
                styles={styles}
                value="notInFavorites"
                name={
                    <Text rus="Не в избранных" eng="Not in favorites" est="Pole lemmikute hulgas" />
                }
            />
        </>
    );
};

export default CartListFilter;
