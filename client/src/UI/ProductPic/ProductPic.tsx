import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModalType, setPicSrc } from '../../redux/modalSlice';
import { switchModalDisplay } from '../../redux/stylesSlice';
import { IProductPic } from './IProductPic';
import defaultProductImg from '../../assets/images/defaultProduct.svg';
import styles from './ProductPic.module.scss';

const ProductPic: FC<IProductPic> = ({ src }) => {
    const dispatch = useDispatch();
    const imgRef = useRef<HTMLImageElement>(null);
    const [isClickable, setIsClickable] = useState(true);

    const picOnClick = () => {
        dispatch(setModalType('pic'));
        dispatch(setPicSrc(src));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };
    const onImgError = () => {
        if (imgRef.current) {
            imgRef.current.src = defaultProductImg;
            imgRef.current.className = styles.defaultProductPic;
        }
        setIsClickable(false);
    };

    return (
        <img
            ref={imgRef}
            className={styles.productPic}
            src={src[0]}
            alt=""
            onClick={isClickable ? picOnClick : undefined}
            onError={onImgError}
        />
    );
};

export default ProductPic;
