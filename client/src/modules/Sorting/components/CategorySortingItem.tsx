import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TCategorySorting } from '../../../models/types/TCategorySorting';
import { setCategorySorting } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { ICategorySortingItem } from '../interfaces/ICategorySortingItem';

const CategorySortingItem: FC<ICategorySortingItem> = ({ styles, name, value, sortType }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const sortDisplay = useSelector((state: RootState) => state.stylesSlice.sortingDisplay);
    const categorySorting = useSelector((state: RootState) => state.sideBarSlice.categorySorting);
    const isChecked = categorySorting.sortKey === value && categorySorting.sortType === sortType;
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCategorySorting({ sortKey: e.target.value as TCategorySorting, sortType }));
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

export default CategorySortingItem;
