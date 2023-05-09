import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { ICategorySorting } from '../interfaces/ICategorySorting';
import CategorySortingItem from './CategorySortingItem';

const CategorySorting: FC<ICategorySorting> = ({ styles }) => {
    return (
        <>
            <CategorySortingItem
                styles={styles}
                value="name"
                name={<Text rus="Название" eng="Name" est="Nimi" />}
            />
        </>
    );
};

export default CategorySorting;
