import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { routeConstants } from '../../../models/enums/EConstants';
import { IPrice } from '../interfaces/IPrice';

const Price: FC<IPrice> = ({ styles, count, price }) => {
    const isCartLocation = '/' + useLocation().pathname.split('/')[1] === routeConstants.CART_ROUTE;
    const fullPrice = isCartLocation ? price * count : price;

    return (
        <div className={styles.price}>
            <div className={styles.price__full}>{eurFormatter.format(fullPrice)}</div>

            <div
                style={isCartLocation ? {} : { display: 'none' }}
                className={styles.price__single}
            >{`${count} x ${eurFormatter.format(price)}`}</div>
        </div>
    );
};

export default Price;
