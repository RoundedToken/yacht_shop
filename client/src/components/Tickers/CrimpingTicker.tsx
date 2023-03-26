import React from 'react';
import Text from '../Text/Text';
import styles from './Ticker.module.scss';

const CrimpingTicker = () => {
    return (
        <div className={styles.Ticker__Container}>
            <div className={styles.Ticker}>
                <div className={styles.Ticker__Wrapper}>
                    <Text
                        rus="обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; "
                        eng="crimping &#9679; CRIMPING &#9679; crimping &#9679; CRIMPING &#9679; crimping &#9679; CRIMPING &#9679; "
                        est="krimpsutamine &#9679; KRIMPSUTAMINE &#9679; krimpsutamine &#9679; KRIMPSUTAMINE &#9679;krimpsutamine &#9679; KRIMPSUTAMINE &#9679; "
                    />
                    <Text
                        rus="обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; "
                        eng="crimping &#9679; CRIMPING &#9679; crimping &#9679; CRIMPING &#9679; crimping &#9679; CRIMPING &#9679; "
                        est="krimpsutamine &#9679; KRIMPSUTAMINE &#9679; krimpsutamine &#9679; KRIMPSUTAMINE &#9679;krimpsutamine &#9679; KRIMPSUTAMINE &#9679; "
                    />
                    <Text
                        rus="обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; "
                        eng="crimping &#9679; CRIMPING &#9679; crimping &#9679; CRIMPING &#9679; crimping &#9679; CRIMPING &#9679; "
                        est="krimpsutamine &#9679; KRIMPSUTAMINE  &#9679; krimpsutamine &#9679; KRIMPSUTAMINE &#9679;krimpsutamine &#9679; KRIMPSUTAMINE &#9679; "
                    />
                </div>
            </div>
        </div>
    );
};

export default CrimpingTicker;
