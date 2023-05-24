import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import AppRoutes from '../../routes/AppRoutes';
import SideBar from '../SideBar/SideBar';
import styles from './Body.module.scss';

const Body = () => {
    const location = '/' + useLocation().pathname.split('/')[1];

    return (
        <div
            style={location === routeConstants.PRODUCT_ROUTE ? { gap: '0px' } : {}}
            className={styles.body}
        >
            <div className={styles.sideBarContainer}>
                <SideBar />
            </div>

            <div className={styles.contentContainer}>
                <AppRoutes />
            </div>
        </div>
    );
};

export default Body;
