import React from 'react';
import Text from '../Text/Text';
import styles from './Ticker.module.scss';

const ContactsTicker = () => {
    return (
        <div className={styles.Ticker__Container}>
            <div className={styles.Ticker}>
                <div className={styles.Ticker__Wrapper}>
                    <Text
                        rus="контакты &#9679; КОНТАКТЫ &#9679; контакты &#9679; КОНТАКТЫ &#9679; контакты &#9679; КОНТАКТЫ &#9679; "
                        eng="contacts &#9679; CONTACTS &#9679; contacts &#9679; CONTACTS &#9679; contacts &#9679; CONTACTS &#9679; "
                        est="kontaktid &#9679; KONTAKTID  &#9679; kontaktid &#9679; KONTAKTID  &#9679;kontaktid &#9679; KONTAKTID  &#9679; "
                    />
                    <Text
                        rus="контакты &#9679;  КОНТАКТЫ &#9679; контакты &#9679;  КОНТАКТЫ &#9679; контакты &#9679;  КОНТАКТЫ &#9679; "
                        eng="contacts &#9679; CONTACTS &#9679; contacts &#9679; CONTACTS &#9679; contacts &#9679; CONTACTS &#9679; "
                        est="kontaktid &#9679; KONTAKTID &#9679; kontaktid &#9679; KONTAKTID &#9679;kontaktid &#9679; KONTAKTID &#9679; "
                    />
                    <Text
                        rus="контакты &#9679;  КОНТАКТЫ &#9679; контакты &#9679;  КОНТАКТЫ &#9679; контакты &#9679;  КОНТАКТЫ &#9679; "
                        eng="contacts &#9679; CONTACTS &#9679; contacts &#9679; CONTACTS &#9679; contacts &#9679; CONTACTS &#9679; "
                        est="kontaktid &#9679; KONTAKTID &#9679; kontaktid &#9679; KONTAKTID &#9679;kontaktid &#9679; KONTAKTID &#9679; "
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactsTicker;
