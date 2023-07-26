import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import img1 from '../../../assets/images/swiperImg1.jpg';
import img2 from '../../../assets/images/swiperImg2.jpg';
import img3 from '../../../assets/images/swiperImg3.jpg';
import img4 from '../../../assets/images/swiperImg4.jpg';

const AutoSwiper = ({ styles }: { styles: { readonly [key: string]: string } }) => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.swiper}
        >
            <SwiperSlide className={styles.swiperSlide}>
                <img src={img1} alt="" />
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
                <img src={img2} alt="" />
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
                <img src={img3} alt="" />
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
                <img src={img4} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default AutoSwiper;
