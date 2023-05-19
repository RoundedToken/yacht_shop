import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { switchSortingDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import arrowImg from '../../../assets/images/arrow.png';
import { ISortingHeader } from '../interfaces/ISortingHeader';

const SortingHeader: FC<ISortingHeader> = ({ styles }) => {
    const dispatch = useDispatch();
    const sortingDisplay = useSelector((state: RootState) => state.stylesSlice.sortingDisplay);

    const switchDisplay = () => {
        dispatch(switchSortingDisplay());
    };

    return (
        <div className={styles.header} onClick={switchDisplay}>
            <Text rus="Сортировка" eng="Sorting" est="Sorteerimine" />

            <img
                className={sortingDisplay === 'none' ? styles.rightArrow : styles.downArrow}
                src={arrowImg}
                alt=""
            />
        </div>
    );
};

export default SortingHeader;
