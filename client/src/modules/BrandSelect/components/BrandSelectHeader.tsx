import React, { FC, useRef } from 'react';
import Text from '../../../UI/Text/Text';
import { IBrandSelectHeader } from '../interfaces/IBrandSelectHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { switchBrandsDisplay } from '../../../redux/stylesSlice';
import { clearBrands } from '../../../redux/sideBarSlice';
import arrowImg from '../../../assets/images/arrow.png';

const BrandSelectHeader: FC<IBrandSelectHeader> = ({ styles, selectedBrands }) => {
    const dispatch = useDispatch();
    const brandsDisplay = useSelector((state: RootState) => state.stylesSlice.brandsDisplay);
    const clearRef = useRef<HTMLDivElement>(null);

    const clearOnClick = () => {
        dispatch(clearBrands());
    };
    const switchDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== clearRef.current) {
            dispatch(switchBrandsDisplay());
        }
    };

    return (
        <div className={styles.header} onClick={(e) => switchDisplay(e)}>
            <div
                ref={clearRef}
                onClick={clearOnClick}
                className={styles.closeContainer}
                style={selectedBrands.length === 0 ? { display: 'none' } : {}}
            >
                &times;
            </div>

            <Text rus="Бренды" eng="Brands" est="Brändi" />

            <img
                className={brandsDisplay === 'none' ? styles.rightArrow : styles.downArrow}
                src={arrowImg}
                alt=""
            />
        </div>
    );
};

export default BrandSelectHeader;
