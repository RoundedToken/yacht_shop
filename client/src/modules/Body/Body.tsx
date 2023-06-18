import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import AppRoutes from '../../routes/AppRoutes';
import SideBar from '../SideBar/SideBar';
import styles from './Body.module.scss';
import { useDispatch } from 'react-redux';
import { setMobileModalType } from '../../redux/modalSlice';
import { switchMobileModalDisplay } from '../../redux/stylesSlice';
import filtersImg from '../../assets/images/filters.png';

const Body = () => {
    const location = '/' + useLocation().pathname.split('/')[1];
    const dispatch = useDispatch();

    const filterOnClick = () => {
        dispatch(setMobileModalType('filter'));
        dispatch(switchMobileModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <div
            style={
                location === routeConstants.PRODUCT_ROUTE ||
                location === routeConstants.CONTACTS_ROUTE
                    ? { gap: '0px' }
                    : location === routeConstants.CRIMPING_ROUTE
                    ? { gap: '0px', marginBottom: '0px' }
                    : {}
            }
            className={styles.body}
        >
            {(location === routeConstants.CATEGORIES_ROUTE ||
                location === routeConstants.PRODUCT_LIST_ROUTE ||
                location === routeConstants.FAVORITES_ROUTE ||
                location === routeConstants.SEARCH_ROUTE ||
                location === routeConstants.CART_ROUTE) && (
                <>
                    <div className={styles.filterButton} onClick={filterOnClick}></div>

                    <img
                        className={styles.filterImg}
                        src={filtersImg}
                        alt=""
                        onClick={filterOnClick}
                    />
                </>
            )}

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
