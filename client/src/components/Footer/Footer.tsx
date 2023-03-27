import React from 'react';
import Text from '../Text/Text';
import styles from './Footer.module.scss';
import contactsImg from '../../assets/HeaderImg/contacts.png';
import mailImg from '../../assets/FooterImg/mail.png';
import phoneImg from '../../assets/FooterImg/phone.png';
import addressImg from '../../assets/FooterImg/address.png';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__Container}>
                <div className={styles.Waves}>
                    <div className={`${styles.Wave}  ${styles.wave1}`}></div>
                    <div className={`${styles.Wave}  ${styles.wave2}`}></div>
                    <div className={`${styles.Wave}  ${styles.wave3}`}></div>
                    <div className={`${styles.Wave}  ${styles.wave4}`}></div>
                </div>

                <div className={styles.Content}>
                    <div className={styles.Address}>
                        <img src={addressImg} alt="" width={32} height={32} />
                        Parnu JahtKlubi, Lootsi tn 6, Parnu
                        <div className={styles.Working__Mode}>
                            <Text rus="Пн,Вт - вых" eng="Mon,Tue - day off" est="E,T - puhkepäev" />
                            <Text rus="Ср-Сб - 12-20" eng="Wed-Sat - 12-20" est="K-L - 12-20" />
                            <Text rus="Вс - 12-17" eng="Sun - 12-17" est="P - 12-17" />
                        </div>
                    </div>
                    <div className={styles.Item}>
                        <img src={phoneImg} alt="" width={24} height={24} />
                        +372 589 45 074
                    </div>
                    <div className={styles.Item}>
                        <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                            <img src={contactsImg} alt="" width={28} height={28} />
                            <Text rus="Наш Whats'up" eng="Our Whats'up" est="Meie Whats'up" />
                        </a>
                    </div>
                    <div className={styles.Item}>
                        <img src={mailImg} alt="" width={28} height={28} />
                        shop@yachtshop.ee
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
