import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import { IName } from '../interfaces/IName';

const Name: FC<IName> = ({ styles }) => {
    return (
        <Link to={routeConstants.MAIN_ROUTE} className={styles.name}>
            <Text
                rus="Всё для яхт и яхтсменов"
                eng="All for boats and sailors"
                est="Kõik paatide ja meremeeste jaoks"
            />
        </Link>
    );
};

export default Name;
