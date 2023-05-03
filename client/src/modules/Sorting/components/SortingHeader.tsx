import React, { FC } from 'react';
import upArrowImg from '../../../assets/images/upArrow.png';
import downArrowImg from '../../../assets/images/downArrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { switchSortingDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import closeImg from '../../../assets/images/close.png';
import { clearSorting } from '../../../redux/sideBarSlice';
import { isHiddenExpression } from '../helpers/isHiddenExpression';
import { ISortingHeader } from '../interfaces/ISortingHeader';

const SortingHeader: FC<ISortingHeader> = ({ styles }) => {
    const dispatch = useDispatch();
    const sortingDisplay = useSelector((state: RootState) => state.stylesSlice.sortingDisplay);
    const cartSorting = useSelector((state: RootState) => state.sideBarSlice.cartSorting);
    const categorySorting = useSelector((state: RootState) => state.sideBarSlice.categorySorting);
    const productListSorting = useSelector(
        (state: RootState) => state.sideBarSlice.productListSorting
    );
    const favoritesSorting = useSelector((state: RootState) => state.sideBarSlice.favoritesSorting);
    const isHidden = isHiddenExpression(
        cartSorting,
        categorySorting,
        productListSorting,
        favoritesSorting
    );

    const switchDisplay = () => {
        dispatch(switchSortingDisplay());
    };
    const clearOnClick = () => {
        dispatch(clearSorting());
    };

    return (
        <div className={styles.sortingHeader}>
            <div className={styles.headerTitle}>
                <Text rus="Сортировка" eng="Sorting" est="Sorteerimine" />
                <img
                    onClick={switchDisplay}
                    src={sortingDisplay === 'none' ? downArrowImg : upArrowImg}
                    alt=""
                />
            </div>

            <button onClick={clearOnClick} hidden={isHidden}>
                <img src={closeImg} alt="" width={16} height={16} />
                <Text rus="Отменить" eng="Cancel" est="Tühista" />
            </button>
        </div>
    );
};

export default SortingHeader;
