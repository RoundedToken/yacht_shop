import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import ropeboxLogoImg from '../../../assets/images/ropeboxLogo.jpg';
import { IHeaderLogo } from '../interfaces/IHeaderLogo';

const HeaderLogo: FC<IHeaderLogo> = ({ styles }) => {
    return (
        <Link to={routeConstants.MAIN_ROUTE} className={styles.headerLogo}>
            <img src={ropeboxLogoImg} alt="headerLogo" />
        </Link>
    );
};

export default HeaderLogo;
