import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TCartSorting } from '../../../models/types/TCartSorting';
import { setCartSorting } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { ICartSortingItem } from '../interfaces/ICartSortingItem';

const CartSortingItem: FC<ICartSortingItem> = ({ styles, name, value, sortType }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const sortDisplay = useSelector((state: RootState) => state.stylesSlice.sortingDisplay);
    const cartSorting = useSelector((state: RootState) => state.sideBarSlice.cartSorting);
    const isChecked = cartSorting.sortKey === value && cartSorting.sortType === sortType;
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCartSorting({ sortKey: e.target.value as TCartSorting, sortType }));
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

export default CartSortingItem;
