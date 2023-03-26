import React from 'react';
import Text from '../Text/Text';
import styles from './Ticker.module.scss';

const MainTicker = () => {
    return (
        <div className={styles.Ticker__Container}>
            <div className={styles.Ticker}>
                <div className={styles.Ticker__Wrapper}>
                    <Text
                        rus="главная &#9679; ГЛАВНАЯ &#9679; главная &#9679; ГЛАВНАЯ &#9679; главная &#9679; ГЛАВНАЯ &#9679; главная &#9679; ГЛАВНАЯ &#9679; "
                        eng="main &#9679; MAIN &#9679; main &#9679; MAIN &#9679; main &#9679; MAIN &#9679; main &#9679; MAIN &#9679; "
                        est="pealeht &#9679; PEALEHT &#9679; pealeht &#9679; PEALEHT &#9679; pealeht &#9679; PEALEHT &#9679; "
                    />
                    <Text
                        rus="главная &#9679; ГЛАВНАЯ &#9679; "
                        eng="main &#9679; MAIN &#9679; main &#9679; MAIN &#9679; "
                        est="pealeht &#9679; PEALEHT &#9679; pealeht &#9679; PEALEHT &#9679; "
                    />
                    <Text
                        rus="главная &#9679; ГЛАВНАЯ &#9679; "
                        eng="main &#9679; MAIN &#9679; main &#9679; MAIN &#9679; "
                        est="pealeht &#9679; PEALEHT &#9679; pealeht &#9679; PEALEHT &#9679; "
                    />
                </div>
            </div>
        </div>
    );
};

export default MainTicker;
