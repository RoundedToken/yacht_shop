import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavoritesFilters } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { switchFilterDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import { IFavoritesFilterHeader } from '../interfaces/IFavoritesFilterHeader';
import arrowImg from '../../../assets/images/arrow.png';

const FavoritesFilterHeader: FC<IFavoritesFilterHeader> = ({ styles }) => {
    const dispatch = useDispatch();
    const filterDisplay = useSelector((state: RootState) => state.stylesSlice.filterDisplay);
    const isFilters = Object.values(
        useSelector((state: RootState) => state.sideBarSlice.favoritesFilters)
    ).some((val) => val);
    const clearRef = useRef<HTMLDivElement>(null);

    const switchDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== clearRef.current) {
            dispatch(switchFilterDisplay());
        }
    };
    const clearOnClick = () => {
        dispatch(clearFavoritesFilters());
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

export default FavoritesFilterHeader;
