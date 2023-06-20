import React, { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IPicModal } from '../interfaces/IPicModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Zoom, Mousewheel } from 'swiper';
import defaultProductImg from '../../../assets/images/defaultProduct.svg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const PicModal: FC<IPicModal> = ({ styles }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const picSrc = useSelector((state: RootState) => state.modalSlice.picSrc);
    const picL = picSrc.length;
    const img1Ref = useRef<Array<HTMLImageElement | null>>([]);
    const img2Ref = useRef<Array<HTMLImageElement | null>>([]);

    const onImgError = (i: number) => {
        if (img1Ref.current[i] && img2Ref.current[i]) {
            //@ts-ignore
            img1Ref.current[i].src = defaultProductImg;
            //@ts-ignore
            img2Ref.current[i].src = defaultProductImg;
            //@ts-ignore
            img1Ref.current[i].className = styles.defaultProductPic;
            //@ts-ignore
            img2Ref.current[i].className = styles.defaultProductPic;
        }
    };

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
                {picSrc.map((src, i) => (
                    <SwiperSlide className={styles.swiperSlide} key={src}>
                        <div className="swiper-zoom-container">
                            <img
                                ref={(el) => (img1Ref.current[i] = el)}
                                onError={() => onImgError(i)}
                                src={src}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {picL > 1 && (
                <Swiper
                    //@ts-ignore
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.bottomSwiper}
                >
                    {picSrc.map((src, i) => (
                        <SwiperSlide className={styles.swiperSlide} key={src}>
                            <img
                                ref={(el) => (img2Ref.current[i] = el)}
                                src={src}
                                onError={() => onImgError(i)}
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default PicModal;
