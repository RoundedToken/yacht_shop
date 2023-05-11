import React from 'react';
import styles from './Contacts.module.scss';
import GoogleMap from './components/GoogleMap';
import shopImg from '../../assets/images/shop.jpg';
import Text from '../../UI/Text/Text';
import images from '../../assets/images/contacts.svg';
import mailImg from '../../assets/images/mail.png';
import phoneImg from '../../assets/images/phone.png';
import locationImg from '../../assets/images/location.png';

const Contacts = () => {
    return (
        <div className={styles.Contacts}>
            <GoogleMap styles={styles} />
            <div className={styles.Bottom__Container}>
                <div className={styles.Content}>
                    <div className={styles.Address}>
                        <img src={locationImg} alt="" width={32} height={32} />
                        Parnu JahtKlubi, Lootsi tn 6, Parnu
                    </div>
                    <div className={styles.Working__Mode}>
                        <Text rus="Пн,Вт - вых" eng="Mon,Tue - day off" est="E,T - puhkepäev" />
                        <Text rus="Ср-Сб - 12-20" eng="Wed-Sat - 12-20" est="K-L - 12-20" />
                        <Text rus="Вс - 12-17" eng="Sun - 12-17" est="P - 12-17" />
                    </div>
                    <div className={styles.Item}>
                        <img src={phoneImg} alt="" width={24} height={24} />
                        +372 589 45 074
                    </div>
                    <div className={styles.Item}>
                        <a href="https://wa.me/79854549470" target="_blank" rel="noreferrer">
                            <img src={images} alt="" width={28} height={28} />
                            <Text rus="Наш Whats'up" eng="Our Whats'up" est="Meie Whats'up" />
                        </a>
                    </div>
                    <div className={styles.Item}>
                        <img src={mailImg} alt="" width={28} height={28} />
                        shop@yachtshop.ee
                    </div>
                </div>
                <img className={styles.Shop__Img} src={shopImg} alt="" width={252} height={252} />
            </div>
        </div>
    );
};

export default Contacts;
