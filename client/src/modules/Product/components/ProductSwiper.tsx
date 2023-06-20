import React, { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import fullScreenImg from '../../../assets/images/fullScreen.png';
import { useDispatch } from 'react-redux';
import { setModalType, setPicSrc } from '../../../redux/modalSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice';
import { IProductSwiper } from '../interfaces/IProductSwiper';
import defaultProductImg from '../../../assets/images/defaultProduct.svg';

const ProductSwiper: FC<IProductSwiper> = ({ picSrc, styles }) => {
    const dispatch = useDispatch();
    const [isClickable, setIsClickable] = useState(true);
    const imgRef = useRef<Array<HTMLImageElement | null>>([]);

    const fullScreenOnClick = () => {
        dispatch(setPicSrc(picSrc));
        dispatch(setModalType('pic'));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };
    const onImgError = (i: number) => {
        if (imgRef.current[i]) {
            //@ts-ignore
            imgRef.current[i].src = defaultProductImg;
            //@ts-ignore
            imgRef.current[i].className = styles.defaultProductPic;
        }
    };

    return (
        <div className={styles.image}>
            <img
                onClick={isClickable ? fullScreenOnClick : undefined}
                className={styles.fullScreen}
                src={fullScreenImg}
                alt=""
            />

            <Swiper
                style={{
                    //@ts-ignore
                    '--swiper-navigation-size': '30px',
                }}
                navigation={true}
                mousewheel={true}
                loop={true}
                pagination={true}
                modules={[FreeMode, Navigation, Pagination]}
                className={styles.swiper}
            >
                {picSrc.map((src, i) => (
                    <SwiperSlide className={styles.swiperSlide} key={i}>
                        <img
                            ref={(el) => (imgRef.current[i] = el)}
                            src={src}
                            alt=""
                            onError={() => onImgError(i)}
                            onClick={isClickable ? fullScreenOnClick : undefined}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
