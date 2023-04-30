import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setModalType, setPicSrc } from '../../redux/modalSlice';
import { switchModalDisplay } from '../../redux/stylesSlice';
import { IProductPic } from './IProductPic';
import styles from './ProductPic.module.scss';

const ProductPic: FC<IProductPic> = ({ src }) => {
    const dispatch = useDispatch();

    const picOnClick = () => {
        dispatch(setModalType('pic'));
        dispatch(setPicSrc(src));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return <img className={styles.productPic} src={src} alt="" onClick={picOnClick} />;
};

export default ProductPic;
