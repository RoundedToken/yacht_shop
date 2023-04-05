import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../Text/Text';
import { IHeaderName } from '../interfaces/IHeaderName';

const HeaderName: FC<IHeaderName> = ({ styles }) => {
    return (
        <Link to={routeConstants.MAIN_ROUTE} className={styles.headerName}>
            <Text
                rus="Все для яхт и яхтсменов"
                eng="All for boats and sailors"
                est="Kõik paatide ja meremeeste jaoks"
            />
        </Link>
    );
};

export default HeaderName;
