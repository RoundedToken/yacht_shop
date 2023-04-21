import React from 'react';
import Text from '../Text/Text';
import styles from './Ticker.module.scss';

const FavoritesTicker = () => {
    return (
        <div className={styles.Ticker__Container}>
            <div className={styles.Ticker}>
                <div className={styles.Ticker__Wrapper}>
                    <Text
                        rus="избранное &#9679; ИЗБРАННОЕ &#9679; избранное &#9679; ИЗБРАННОЕ &#9679; избранное &#9679; ИЗБРАННОЕ &#9679; "
                        eng="favorites &#9679; FAVORITES &#9679; favorites &#9679; FAVORITES &#9679; favorites &#9679; FAVORITES &#9679; "
                        est="lemmikud &#9679; LEMMIKUD &#9679; lemmikud &#9679; LEMMIKUD &#9679;lemmikud &#9679; LEMMIKUD &#9679; "
                    />
                    <Text
                        rus="обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; "
                        eng="favorites &#9679; FAVORITES &#9679; favorites &#9679; FAVORITES &#9679; favorites &#9679; FAVORITES &#9679; "
                        est="lemmikud &#9679; LEMMIKUD &#9679; lemmikud &#9679; LEMMIKUD &#9679;lemmikud &#9679; LEMMIKUD &#9679; "
                    />
                    <Text
                        rus="обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; обжим &#9679; ОБЖИМ &#9679; "
                        eng="favorites &#9679; FAVORITES &#9679; favorites &#9679; FAVORITES &#9679; favorites &#9679; FAVORITES &#9679; "
                        est="lemmikud &#9679; LEMMIKUD  &#9679; lemmikud &#9679; LEMMIKUD &#9679;lemmikud &#9679; LEMMIKUD &#9679; "
                    />
                </div>
            </div>
        </div>
    );
};

export default FavoritesTicker;
