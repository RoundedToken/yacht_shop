import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';
import upArrowImg from '../../../assets/images/upArrow.png';
import downArrowImg from '../../../assets/images/downArrow.png';
import { switchFilterDisplay } from '../../../redux/stylesSlice';
import { clearProductListFilters } from '../../../redux/sideBarSlice';
import closeImg from '../../../assets/images/close.png';
import { IProductListFilterHeader } from '../interfaces/IProductListFilterHeader';

const ProductListFilterHeader: FC<IProductListFilterHeader> = ({ styles }) => {
    const dispatch = useDispatch();
    const filterDisplay = useSelector((state: RootState) => state.stylesSlice.filterDisplay);
    const isFilters = Object.values(
        useSelector((state: RootState) => state.sideBarSlice.productListFilters)
    ).some((val) => val);

    const switchDisplay = () => {
        dispatch(switchFilterDisplay());
    };
    const clearOnClick = () => {
        dispatch(clearProductListFilters());
    };

    return (
        <div className={styles.filterHeader}>
            <div className={styles.headerTitle}>
                <Text rus="Фильтр" eng="Filter" est="Filter" />
                <img
                    onClick={switchDisplay}
                    src={filterDisplay === 'none' ? downArrowImg : upArrowImg}
                    alt=""
                />
            </div>

            <button onClick={clearOnClick} hidden={!isFilters}>
                <img src={closeImg} alt="" width={16} height={16} />
                <Text rus="Очистить" eng="Clear" est="Selge" />
            </button>
        </div>
    );
};

export default ProductListFilterHeader;
