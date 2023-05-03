import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TFavoritesSorting } from '../../../models/types/TFavoritesSorting';
import { setFavoritesSorting } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { IFavoritesSortingItem } from '../interfaces/IFavoritesSortingItem';

const FavoritesSortingItem: FC<IFavoritesSortingItem> = ({ styles, name, value, sortType }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const sortDisplay = useSelector((state: RootState) => state.stylesSlice.sortingDisplay);
    const favoritesSorting = useSelector((state: RootState) => state.sideBarSlice.favoritesSorting);
    const isChecked = favoritesSorting.sortKey === value && favoritesSorting.sortType === sortType;
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFavoritesSorting({ sortKey: e.target.value as TFavoritesSorting, sortType }));
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

export default FavoritesSortingItem;
