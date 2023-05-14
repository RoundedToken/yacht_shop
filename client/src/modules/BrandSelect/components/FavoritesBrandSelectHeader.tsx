import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavoritesBrands } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { switchBrandsDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import { IFavoritesBrandSelectHeader } from '../interfaces/IFavoritesBrandSelectHeader';
import upArrowImg from '../../../assets/images/upArrow.png';
import downArrowImg from '../../../assets/images/downArrow.png';
import closeImg from '../../../assets/images/close.png';

const FavoritesBrandSelectHeader: FC<IFavoritesBrandSelectHeader> = ({
    styles,
    selectedBrands,
}) => {
    const dispatch = useDispatch();
    const brandsDisplay = useSelector((state: RootState) => state.stylesSlice.brandsDisplay);

    const clearOnClick = () => {
        dispatch(clearFavoritesBrands());
    };
    const switchDisplay = () => {
        dispatch(switchBrandsDisplay());
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerTitle}>
                <Text rus="Бренды" eng="Brands" est="Kaubamärgid" />
                <img
                    onClick={switchDisplay}
                    src={brandsDisplay === 'none' ? downArrowImg : upArrowImg}
                    alt=""
                />
            </div>

            <button onClick={clearOnClick} hidden={selectedBrands.length === 0}>
                <img src={closeImg} alt="" width={16} height={16} />
                <Text rus="Очистить" eng="Clear" est="Selge" />
            </button>
        </div>
    );
};

export default FavoritesBrandSelectHeader;