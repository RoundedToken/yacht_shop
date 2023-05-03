import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TProductListFilter } from '../../../models/types/TProductListFilter';
import { setProductListFilter } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { IProductListFilterItem } from '../interfaces/IProductListFilterItem';

const ProductListFilterItem: FC<IProductListFilterItem> = ({ styles, name, value }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const filterDisplay = useSelector((state: RootState) => state.stylesSlice.filterDisplay);
    const isChecked = useSelector(
        (state: RootState) => state.sideBarSlice.productListFilters[value]
    );
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setProductListFilter({
                filter: e.target.value as TProductListFilter,
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

export default ProductListFilterItem;
