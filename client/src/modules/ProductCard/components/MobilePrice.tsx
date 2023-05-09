import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { routeConstants } from '../../../models/enums/EConstants';
import { IMobilePrice } from '../interfaces/IMobilePrice';

const MobilePrice: FC<IMobilePrice> = ({ styles, count, price }) => {
    const isCartLocation = '/' + useLocation().pathname.split('/')[1] === routeConstants.CART_ROUTE;
    const fullPrice = isCartLocation ? price * count : price;

    return (
        <div className={styles._mobilePrice}>
            <div className={styles._mobilePrice__full}>{eurFormatter.format(fullPrice)}</div>

            <div
                style={isCartLocation ? {} : { display: 'none' }}
                className={styles._mobilePrice__single}
            >{`${count} x ${eurFormatter.format(price)}`}</div>
        </div>
    );
};

export default MobilePrice;
