import React from 'react';
import styles from './Main.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { webNewsApi } from '../../services/webNews';
import NewsItem from './components/NewsItem';
import topImg from '../../assets/images/mainTopImg.jpg';
import AutoSwiper from './components/AutoSwiper';
import bottomImg from '../../assets/images/mainBottomImg.jpg';
import bellImg from '../../assets/images/bell.jpg';
import wheelImg from '../../assets/images/wheel.jpg';
import NewsImg from './components/NewsImg';
import newsImg2 from '../../assets/images/newsImg2.jpg';
import newsImg3 from '../../assets/images/newsImg3.jpg';
import newsImg1 from '../../assets/images/newImg1.jpg';
import img2 from '../../assets/images/swiperImg2.jpg';
import img3 from '../../assets/images/swiperImg3.jpg';

const Main = () => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    let { data } = webNewsApi.useFetchNewsQuery(lang);
    if (data) data = data.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className={styles.root}>
            <div className={styles.leftContainer}>
                <NewsImg styles={styles} src={newsImg1} />

                {data && (
                    <NewsItem
                        key={data[0].date}
                        title={data[0].title}
                        content={data[0].content}
                        styles={styles}
                    />
                )}

                <NewsImg styles={styles} src={newsImg2} />

                {data && (
                    <NewsItem
                        key={data[1].date}
                        title={data[1].title}
                        content={data[1].content}
                        styles={styles}
                    />
                )}

                <NewsImg styles={styles} src={newsImg3} />

                {data &&
                    data.slice(2).map((news, i) => (
                        <>
                            <NewsItem
                                key={news.date}
                                date={news.date}
                                title={news.title}
                                content={news.content}
                                styles={styles}
                            />

                            {data && data.length - 3 !== +i ? (
                                <div className={styles.symbol}>&#9679;</div>
                            ) : null}
                        </>
                    ))}
            </div>

            <div className={styles.content}>
                <div className={styles.topImg}>
                    <img src={topImg} alt="" />
                </div>

                <div className={styles.swiperContainer}>
                    <AutoSwiper styles={styles} />
                </div>

                <div className={styles.bottomImg}>
                    <img src={bottomImg} alt="" />
                </div>

                <div className={styles.bellImg}>
                    <img src={bellImg} alt="" />
                </div>

                <div className={styles.wheelImg}>
                    <img src={wheelImg} alt="" />
                </div>

                <div className={styles.glovesImg}>
                    <img src={img3} alt="" />
                </div>

                <div className={styles.colorsImg}>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Main;
