import React from 'react';
import AppRoutes from '../../routes/AppRoutes';
import styles from './Body.module.scss';

const Body = () => {
    return (
        <div className={`${styles.body} body`}>
            <AppRoutes />
        </div>
    );
};

export default Body;
