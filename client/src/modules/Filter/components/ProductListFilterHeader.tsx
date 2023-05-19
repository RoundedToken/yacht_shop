import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';
import { switchFilterDisplay } from '../../../redux/stylesSlice';
import { clearProductListFilters } from '../../../redux/sideBarSlice';
import { IProductListFilterHeader } from '../interfaces/IProductListFilterHeader';
import arrowImg from '../../../assets/images/arrow.png';

const ProductListFilterHeader: FC<IProductListFilterHeader> = ({ styles }) => {
    const dispatch = useDispatch();
    const filterDisplay = useSelector((state: RootState) => state.stylesSlice.filterDisplay);
    const isFilters = Object.values(
        useSelector((state: RootState) => state.sideBarSlice.productListFilters)
    ).some((val) => val);
    const clearRef = useRef<HTMLDivElement>(null);

    const switchDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== clearRef.current) {
            dispatch(switchFilterDisplay());
        }
    };
    const clearOnClick = () => {
        dispatch(clearProductListFilters());
    };

    return (
        <div className={styles.filterHeader} onClick={(e) => switchDisplay(e)}>
            <div
                ref={clearRef}
                onClick={clearOnClick}
                className={styles.closeContainer}
                style={!isFilters ? { display: 'none' } : {}}
            >
                &times;
            </div>

            <Text rus="Фильтр" eng="Filter" est="Filter" />

            <img
                className={filterDisplay === 'none' ? styles.rightArrow : styles.downArrow}
                src={arrowImg}
                alt=""
            />
        </div>
    );
};

export default ProductListFilterHeader;
