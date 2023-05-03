import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TProductListSorting } from '../../../models/types/TProductListSorting';
import { setProductListSorting } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { IProductListSortingItem } from '../interfaces/IProductListSortingItem';

const ProductListSortingItem: FC<IProductListSortingItem> = ({ styles, name, value, sortType }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const sortDisplay = useSelector((state: RootState) => state.stylesSlice.sortingDisplay);
    const productListSorting = useSelector(
        (state: RootState) => state.sideBarSlice.productListSorting
    );
    const isChecked =
        productListSorting.sortKey === value && productListSorting.sortType === sortType;
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setProductListSorting({ sortKey: e.target.value as TProductListSorting, sortType })
        );
    };

    useEffect(() => {
        if (labelRef.current) labelRef.current.style.display = sortDisplay;
    }, [sortDisplay]);

    return (
        <label ref={labelRef} className={styles.container}>
            <input
                checked={isChecked}
                value={value}
                type="radio"
                onChange={(e) => filterOnChange(e)}
            />
            {sortType === 'ASC' ? '\u{02191}' : '\u{02193}'}
            {name}

            <span className={styles.checkMark}></span>
        </label>
    );
};

export default ProductListSortingItem;
