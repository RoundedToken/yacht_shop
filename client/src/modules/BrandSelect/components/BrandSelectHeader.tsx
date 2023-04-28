import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IBrandSelectHeader } from '../interfaces/IBrandSelectHeader';
import closeImg from '../../../assets/images/close.png';
import { useDispatch } from 'react-redux';
import { clearBrands } from '../../../redux/navSlice';

const BrandSelectHeader: FC<IBrandSelectHeader> = ({ styles }) => {
    const dispatch = useDispatch();

    const clearOnClick = () => {
        dispatch(clearBrands());
    };

    return (
        <div className={styles.header}>
            <Text rus="Бренды" eng="Brands" est="Kaubamärgid" />

            <button onClick={clearOnClick}>
                <img src={closeImg} alt="" width={16} height={16} />
                <Text rus="Очистить" eng="Clear" est="Selge" />
            </button>
        </div>
    );
};

export default BrandSelectHeader;
