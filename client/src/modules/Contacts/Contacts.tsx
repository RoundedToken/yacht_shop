import React from 'react';
import styles from './Contacts.module.scss';
import GoogleMap from './components/GoogleMap';
import shopImage from '../../assets/images/shopImage.jpg';
import Text from '../../UI/Text/Text';
import locationScreenImg from '../../assets/images/locationScreen.jpg';
import contactsImg from '../../assets/images/contacts.svg';
import mailImg from '../../assets/images/mail.svg';
import ringImg from '../../assets/images/ring.svg';
import { Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import compassImg from '../../assets/images/compass.jpg';

const Contacts = () => {
    return (
        <>
            <div className={styles.rootContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.address}>
                        <img src={contactsImg} alt="" />
                        <div className={styles.addressText}>
                            Pärnu JahtKlubi
                            <br /> Lootsi tn 6
                            <br /> Pärnu
                        </div>
                    </div>

                    <div className={styles.contacts}>
                        <img src={ringImg} alt="" />
                        +372 589 450 74
                        <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                            <Text rus="Наш WhatsApp" eng="Our WhatsApp" est="Meie WhatsApp" />
                        </a>
                    </div>

                    <div className={styles.email}>
                        <img src={mailImg} alt="" />
                        <a href="mailto:shop@yachtshop.ee">shop@yachtshop.ee</a>
                    </div>

                    <div className={styles.compass}>
                        <img src={compassImg} alt="" />
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.topContainer}>
                        <div className={styles.topContainerLeft}>
                            <img src={shopImage} alt="" />
                        </div>

                        <div className={styles.topContainerRight}>
                            <Text rus="Открыто" eng="Open" est="Avatud" />

                            <Text
                                rus={`Среда \u{25CF} Суббота`}
                                eng={`Wednesday \u{25CF} Saturday`}
                                est={`Kolmapäev \u{25CF} Laupäev`}
                            />

                            <div>
                                12<sup>00</sup> &ndash; 20<sup>00</sup>
                            </div>

                            <Text rus="Воскресенье" eng="Sunday" est="Pühapäev" />

                            <div>
                                12<sup>00</sup> &ndash; 17<sup>00</sup>
                            </div>

                            <Text rus="Закрыто" eng="Closed" est="Suletud" />

                            <Text
                                rus={`Понедельник \u{25CF} Вторник`}
                                eng={`Monday \u{25CF} Tuesday`}
                                est={`Esmaspäev \u{25CF} Teisipäev`}
                            />
                        </div>
                    </div>

                    <div className={styles.bottomContainer}>
                        <GoogleMap styles={styles} />

                        <Swiper modules={[Zoom]} zoom={true} className={styles.circleContainer}>
                            <SwiperSlide>
                                <div className="swiper-zoom-container">
                                    <img src={locationScreenImg} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className={styles._mobileRootContainer}>
                <div className={styles.shopImg}>
                    <img src={shopImage} alt="" />
                </div>

                <div className={styles.details}>
                    <div className={styles.compass}>
                        <img src={compassImg} alt="" />
                    </div>
                    <div className={styles.address}>
                        <img src={contactsImg} alt="" />
                        <div className={styles.addressText}>
                            Pärnu JahtKlubi
                            <br />
                            Lootsi tn 6, Pärnu
                        </div>
                    </div>

                    <div className={styles.workingMode}>
                        <Text rus="Открыто" eng="Open" est="Avatud" />

                        <Text
                            rus={`Среда \u{25CF} Суббота`}
                            eng={`Wednesday \u{25CF} Saturday`}
                            est={`Kolmapäev \u{25CF} Laupäev`}
                        />

                        <div>
                            12<sup>00</sup> &ndash; 20<sup>00</sup>
                        </div>

                        <Text rus="Воскресенье" eng="Sunday" est="Pühapäev" />

                        <div>
                            12<sup>00</sup> &ndash; 17<sup>00</sup>
                        </div>

                        <Text rus="Закрыто" eng="Closed" est="Suletud" />

                        <Text
                            rus={`Понедельник \u{25CF} Вторник`}
                            eng={`Monday \u{25CF} Tuesday`}
                            est={`Esmaspäev \u{25CF} Teisipäev`}
                        />
                    </div>

                    <div className={styles.contacts}>
                        <img src={ringImg} alt="" />

                        <div className={styles.contactsText}>
                            +372 589 450 74
                            <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                                <Text
                                    rus="&nbsp;Наш WhatsApp"
                                    eng="&nbsp;Our WhatsApp"
                                    est="&nbsp;Meie WhatsApp"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomContainer}>
                    <GoogleMap styles={styles} />

                    <div className={styles.email}>
                        <img src={mailImg} alt="" />
                        <a href="mailto:shop@yachtshop.ee">shop@yachtshop.ee</a>
                    </div>

                    <Swiper modules={[Zoom]} zoom={true} className={styles.circleContainer}>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img src={locationScreenImg} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Contacts;
