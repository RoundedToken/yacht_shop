import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import fullScreenImg from '../../../assets/images/fullScreen.png';
import { useDispatch } from 'react-redux';
import { setModalType, setPicSrc } from '../../../redux/modalSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice';
import { IProductSwiper } from '../interfaces/IProductSwiper';

const ProductSwiper: FC<IProductSwiper> = ({ picSrc, styles }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const picL = picSrc.length;
    const dispatch = useDispatch();

    const fullScreenOnClick = () => {
        dispatch(setPicSrc(picSrc));
        dispatch(setModalType('pic'));
        dispatch(switchModalDisplay());
    };

    return (
        <div className={styles.swiper}>
            <img
                onClick={fullScreenOnClick}
                className={styles.fullScreenImg}
                src={fullScreenImg}
                alt=""
            />

            <Swiper
                centeredSlides={true}
                centeredSlidesBounds={true}
                loop={true}
                navigation={true}
                zoom={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Zoom]}
                className={picL === 1 ? styles.singleSwiper : styles.topSwiper}
            >
                {picSrc.map((src) => (
                    <SwiperSlide className={styles.swiperSlide} key={src}>
                        <div className="swiper-zoom-container">
                            <img src={src} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {picL > 1 && (
                <Swiper
                    //@ts-ignore
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={picL}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.bottomSwiper}
                >
                    {picSrc.map((src) => (
                        <SwiperSlide className={styles.swiperSlide} key={src}>
                            <img src={src} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default ProductSwiper;