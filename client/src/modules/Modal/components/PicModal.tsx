import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IPicModal } from '../interfaces/IPicModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Zoom, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const PicModal: FC<IPicModal> = ({ styles }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const picSrc = useSelector((state: RootState) => state.modalSlice.picSrc);
    const picL = picSrc.length;

    return (
        <div className={styles.swiper}>
            <Swiper
                centeredSlides={true}
                centeredSlidesBounds={true}
                loop={true}
                navigation={true}
                zoom={true}
                mousewheel={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Zoom, Mousewheel]}
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

export default PicModal;
