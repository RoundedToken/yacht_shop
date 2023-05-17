import React from 'react';
import Text from '../../UI/Text/Text';
import styles from './Footer.module.scss';
import whatsUpImg from '../../assets/images/whatsUp.png';
import mailImg from '../../assets/images/mail.svg';
import phoneImg from '../../assets/images/phone.png';
import locationImg from '../../assets/images/location.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.waves}>
                    <div className={`${styles.wave}  ${styles.wave1}`}></div>
                    <div className={`${styles.wave}  ${styles.wave2}`}></div>
                    <div className={`${styles.wave}  ${styles.wave3}`}></div>
                    <div className={`${styles.wave}  ${styles.wave4}`}></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.address}>
                        <img src={locationImg} alt="" />
                        Parnu JahtKlubi, Lootsi tn 6, Parnu
                        <div className={styles.workingMode}>
                            <Text rus="Пн,Вт - вых" eng="Mon,Tue - day off" est="E,T - puhkepäev" />
                            <Text rus="Ср-Сб - 12-20" eng="Wed-Sat - 12-20" est="K-L - 12-20" />
                            <Text rus="Вс - 12-17" eng="Sun - 12-17" est="P - 12-17" />
                        </div>
                    </div>

                    <div className={styles.item}>
                        <img src={phoneImg} alt="" />
                        +372 589 45 074
                    </div>

                    <div className={styles.item}>
                        <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                            <img src={whatsUpImg} alt="" />
                            <Text rus="Наш Whats'up" eng="Our Whats'up" est="Meie Whats'up" />
                        </a>
                    </div>

                    <div className={styles.item}>
                        <img src={mailImg} alt="" />
                        shop@yachtshop.ee
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
