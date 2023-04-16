import React from 'react';
import Text from '../../UI/Text/Text';
import styles from './Ticker.module.scss';

const CatalogTicker = () => {
    return (
        <div className={styles.Ticker__Container}>
            <div className={styles.Ticker}>
                <div className={styles.Ticker__Wrapper}>
                    <Text
                        rus="каталог &#9679; КАТАЛОГ &#9679; каталог &#9679; КАТАЛОГ &#9679; каталог &#9679; КАТАЛОГ &#9679; "
                        eng="catalog &#9679; CATALOG &#9679; catalog &#9679; CATALOG &#9679; catalog &#9679; CATALOG &#9679; "
                        est="kataloog &#9679; KATALOOG  &#9679; kataloog &#9679; KATALOOG  &#9679;kataloog &#9679; KATALOOG  &#9679; "
                    />
                    <Text
                        rus="каталог &#9679; КАТАЛОГ &#9679; каталог &#9679; КАТАЛОГ &#9679; каталог &#9679; КАТАЛОГ &#9679; "
                        eng="catalog &#9679; CATALOG &#9679; catalog &#9679; CATALOG &#9679; catalog &#9679; CATALOG &#9679; "
                        est="kataloog &#9679; KATALOOG  &#9679; kataloog &#9679; KATALOOG  &#9679;kataloog &#9679; KATALOOG  &#9679; "
                    />
                    <Text
                        rus="каталог &#9679; КАТАЛОГ &#9679; каталог &#9679; КАТАЛОГ &#9679; каталог &#9679; КАТАЛОГ &#9679; "
                        eng="catalog &#9679; CATALOG &#9679; catalog &#9679; CATALOG &#9679; catalog &#9679; CATALOG &#9679; "
                        est="kataloog &#9679; KATALOOG  &#9679; kataloog &#9679; KATALOOG  &#9679;kataloog &#9679; KATALOOG  &#9679; "
                    />
                </div>
            </div>
        </div>
    );
};

export default CatalogTicker;
