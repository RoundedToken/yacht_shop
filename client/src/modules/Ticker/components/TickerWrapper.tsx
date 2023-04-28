import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { tickerRepeat } from '../helpers/tickerRepeat';
import { ITickerWrapper } from '../interfaces/ITickerWrapper';

const TickerWrapper: FC<ITickerWrapper> = ({ styles, rus, eng, est }) => {
    const rusTicker = tickerRepeat(rus);
    const engTicker = tickerRepeat(eng);
    const estTicker = tickerRepeat(est);

    return (
        <div className={styles.tickerWrapper}>
            <Text rus={rusTicker} eng={engTicker} est={estTicker} />
        </div>
    );
};

export default TickerWrapper;
