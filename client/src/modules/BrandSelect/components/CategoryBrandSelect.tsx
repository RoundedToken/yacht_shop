import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { sortByBrands } from '../helpers/sortByBrands';
import { ICategoryBrandSelect } from '../interfaces/ICategoryBrandSelect';
import BrandSelectItem from './BrandSelectItem';

const CategoryBrandSelect: FC<ICategoryBrandSelect> = ({
    styles,
    categoryId,
    selectedBrands,
    brandOnChange,
}) => {
    const brands = sortByBrands(
        useSelector((state: RootState) => state.navSlice.categoryList)
            .find((category) => category.id === categoryId)
            ?.brands.slice(),
        selectedBrands
    );

    return (
        <>
            {brands?.map((brand) => (
                <BrandSelectItem
                    key={brand}
                    styles={styles}
                    brand={brand}
                    selectedBrands={selectedBrands}
                    brandOnChange={brandOnChange}
                />
            ))}
        </>
    );
};

export default CategoryBrandSelect;
