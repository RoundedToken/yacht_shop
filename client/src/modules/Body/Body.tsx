import React from 'react';
import AppRoutes from '../../routes/AppRoutes';
import SideBar from '../SideBar/SideBar';
import styles from './Body.module.scss';

const Body = () => {
    return (
        <div className={styles.body}>
            {/* <SideBar />

            <AppRoutes /> */}
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
