import React, { FC } from 'react';
import faviconImg from '../../../assets/images/favicon.png';
import lifebuoyImg from '../../../assets/images/lifebuoy.svg';
import translationImg from '../../../assets/images/translation.png';
import contactsImg from '../../../assets/images/contacts.svg';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { useDispatch } from 'react-redux';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice';
import { setMobileModalType } from '../../../redux/modalSlice';
import { IMobileMenu } from '../interfaces/IMobileMenu';
import PageTitle from '../../SearchBar/components/PageTitle';

const MobileMenu: FC<IMobileMenu> = ({ styles }) => {
    const dispatch = useDispatch();

    const langOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('lang'));
        dispatch(switchMobileModalDisplay());
    };
    const searchOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('search'));
        dispatch(switchMobileModalDisplay());
    };
    return (
        <div className={styles._mobileMenu}>
            <Link className={styles.favicon} to={routeConstants.MAIN_ROUTE}>
                <img src={faviconImg} alt="" />
            </Link>

            <PageTitle styles={styles} />

            <img
                className={styles._mobileSearch}
                src={lifebuoyImg}
                alt=""
                onClick={searchOnClick}
            />

            <img className={styles._mobileLang} src={translationImg} alt="" onClick={langOnClick} />

            <Link to={routeConstants.CONTACTS_ROUTE}>
                <img className={styles._mobileContacts} src={contactsImg} alt="" />
            </Link>
        </div>
    );
};

export default MobileMenu;
