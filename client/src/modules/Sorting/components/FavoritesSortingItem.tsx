import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesSorting } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { IFavoritesSortingItem } from '../interfaces/IFavoritesSortingItem';

const FavoritesSortingItem: FC<IFavoritesSortingItem> = ({ styles, name, value }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const sortDisplay = useSelector((state: RootState) => state.stylesSlice.sortingDisplay);
    const favoritesSorting = useSelector((state: RootState) => state.sideBarSlice.favoritesSorting);
    const isCheckedASC = favoritesSorting.sortKey === value && favoritesSorting.sortType === 'ASC';
    const isCheckedDESC =
        favoritesSorting.sortKey === value && favoritesSorting.sortType === 'DESC';
    const dispatch = useDispatch();

    const filterASCOnChange = () => {
        if (!isCheckedASC && !isCheckedDESC)
            dispatch(
                setFavoritesSorting({
                    sortKey: value,
                    sortType: 'ASC',
                })
            );
    };
    const filterDESCOnChange = () => {
        if (!isCheckedASC && !isCheckedDESC)
            dispatch(
                setFavoritesSorting({
                    sortKey: value,
                    sortType: 'DESC',
                })
            );
    };
    const filterASCOnClick = () => {
        if (isCheckedASC) {
            dispatch(
                setFavoritesSorting({
                    sortKey: value,
                    sortType: 'DESC',
                })
            );
        }
    };
    const filterDESCOnClick = () => {
        if (isCheckedDESC) {
            dispatch(
                setFavoritesSorting({
                    sortKey: value,
                    sortType: 'ASC',
                })
            );
        }
    };

    useEffect(() => {
        if (divRef.current) divRef.current.style.display = sortDisplay;
    }, [sortDisplay]);

    return (
        <div ref={divRef} className={styles.group}>
            <label
                className={styles.container}
                style={isCheckedASC ? {} : isCheckedDESC ? { display: 'none' } : {}}
                onClick={filterASCOnClick}
            >
                <input
                    checked={isCheckedASC}
                    value={value}
                    type="radio"
                    onChange={filterASCOnChange}
                />

                <span className={styles.checkMark}>{'\u{02191}'}</span>
            </label>

            <label
                className={styles.container}
                style={isCheckedDESC ? {} : { display: 'none' }}
                onClick={filterDESCOnClick}
            >
                <input
                    checked={isCheckedDESC}
                    value={value}
                    type="radio"
                    onChange={filterDESCOnChange}
                />

                <span className={styles.checkMark}>{'\u{02193}'}</span>
            </label>
            {name}
        </div>
    );
};

export default FavoritesSortingItem;
