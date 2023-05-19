import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IFavoritesFilter } from '../interfaces/IFavoritesFilter';
import FavoritesFilterItem from './FavoritesFilterItem';

const FavoritesFilter: FC<IFavoritesFilter> = ({ styles }) => {
    return (
        <>
            <FavoritesFilterItem
                styles={styles}
                value="inStock"
                name={<Text rus="В наличии" eng="In stock" est="Laos" />}
            />
        </>
    );
};

export default FavoritesFilter;
