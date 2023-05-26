import React from 'react';
import Text from '../../UI/Text/Text';
import styles from './Footer.module.scss';
import mailImg from '../../assets/images/mail.svg';
import contactsImg from '../../assets/images/contacts.svg';
import shellImg from '../../assets/images/shell.png';
import shell2Img from '../../assets/images/shell2.png';
import ringImg from '../../assets/images/ring.svg';
import navWaveImg from '../../assets/images/navWave.png';

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

                {/* <img className={styles.navWave} src={navWaveImg} alt="" /> */}

                <div className={styles.grid}>
                    <div className={styles.address}>
                        <img src={contactsImg} alt="" />
                        <div className={styles.addressText}>
                            Parnu JahtKlubi
                            <br /> Lootsi tn 6
                            <br /> Parnu
                        </div>
                    </div>

                    <div className={styles.workingMode}>
                        <img src={shellImg} alt="" />

                        <Text
                            rus={`Ср\u{2013}Сб \u{25CF} 12\u{2013}20`}
                            eng={`Wed\u{2013}Sat \u{25CF} 12\u{2013}20`}
                            est={`K\u{2013}L \u{25CF} 12\u{2013}20`}
                        />

                        <Text
                            rus={`Вс \u{25CF} 12\u{2013}17`}
                            eng={`Sun \u{25CF} 12\u{2013}17`}
                            est={`P \u{25CF} 12\u{2013}17`}
                        />
                        <img src={shell2Img} alt="" />

                        <Text
                            rus={`Пн\u{2013}Вт \u{25CF} закрыто`}
                            eng={`Mon,Tue \u{25CF} сlosed`}
                            est={`E,T \u{25CF} suletud`}
                        />
                    </div>

                    <div className={styles.contacts}>
                        <img src={ringImg} alt="" />
                        +372 589 450 74
                        <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                            <Text rus="Наш Whats'up" eng="Our Whats'up" est="Meie Whats'up" />
                        </a>
                    </div>

                    <div className={styles.email}>
                        <img src={mailImg} alt="" />
                        shop@yachtshop.ee
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
