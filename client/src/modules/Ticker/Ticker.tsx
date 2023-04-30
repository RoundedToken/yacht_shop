import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import TickerWrapper from './components/TickerWrapper';
import styles from './Ticker.module.scss';

const Ticker = () => {
    const location = '/' + useLocation().pathname.split('/')[1];

    return (
        <div className={styles.tickerContainer}>
            <div className={styles.ticker}>
                {location === routeConstants.MAIN_ROUTE && (
                    <TickerWrapper rus="главная" eng="main" est="pealeht" styles={styles} />
                )}

                {location === routeConstants.CRIMPING_ROUTE && (
                    <TickerWrapper rus="обжим" eng="crimping" est="krimpsutamine" styles={styles} />
                )}

                {location === routeConstants.CONTACTS_ROUTE && (
                    <TickerWrapper rus="контакты" eng="contacts" est="kontaktid" styles={styles} />
                )}

                {location === routeConstants.PRODUCT_ROUTE && (
                    <TickerWrapper rus="товар" eng="product" est="Toode" styles={styles} />
                )}
            </div>
        </div>
    );
};

export default Ticker;
