import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TFavoritesFilter } from '../../../models/types/TFavoritesFilter';
import { setFavoritesFilter } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { IFavoritesFilterItem } from '../interfaces/IFavoritesFilterItem';

const FavoritesFilterItem: FC<IFavoritesFilterItem> = ({ styles, value, name }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const filterDisplay = useSelector((state: RootState) => state.stylesSlice.filterDisplay);
    const isChecked = useSelector((state: RootState) => state.sideBarSlice.favoritesFilters[value]);
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setFavoritesFilter({
                filter: e.target.value as TFavoritesFilter,
                status: e.target.checked,
            })
        );
    };

    useEffect(() => {
        if (labelRef.current) labelRef.current.style.display = filterDisplay;
    }, [filterDisplay]);

    return (
        <label ref={labelRef} className={styles.container}>
            <input
                checked={isChecked}
                value={value}
                type="checkbox"
                onChange={(e) => filterOnChange(e)}
            />

            {name}

            <span className={styles.checkMark}></span>
        </label>
    );
};

export default FavoritesFilterItem;
