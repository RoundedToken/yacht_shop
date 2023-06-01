import React, { useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import logoImg from '../../assets/images/logo.png';
import logoSVGImg from '../../assets/images/logo.svg';
import logo2Img from '../../assets/images/logo2.png';
import Name from './components/Name';
import Lang from './components/Lang';
import NavBar from './components/NavBar';
import miniLogoImg from '../../assets/images/miniLogo.svg';
import NavBarItem from './components/NavBarItem';
import contactsImg from '../../assets/images/contacts.svg';
import { routeConstants } from '../../models/enums/EConstants';
import Text from '../../UI/Text/Text';
import MobileMenu from './components/MobileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const bottomContainerRef = useRef<HTMLDivElement>(null);
    const topContainerRef = useRef<HTMLDivElement>(null);
    const miniLogoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const offset = bottomContainerRef.current?.offsetTop;
        const diff = (offset || 0) - window.pageYOffset;

        window.onscroll = function () {
            if (
                logoRef.current &&
                topContainerRef.current &&
                miniLogoRef.current &&
                bottomContainerRef &&
                offset
            ) {
                const opacity = (offset - window.pageYOffset) / diff;

                if (window.pageYOffset > offset) {
                    miniLogoRef.current.style.display = 'block';
                    bottomContainerRef.current.style.backgroundColor = 'rgb(254, 153, 1)';
                } else {
                    miniLogoRef.current.classList.remove(styles.miniLogo__after);
                    bottomContainerRef.current.style.backgroundColor = 'white';
                    topContainerRef.current.style.opacity = `${opacity}`;
                    logoRef.current.style.opacity = `${opacity}`;
                    miniLogoRef.current.style.display = 'none';
                }
            }
        };
    }, []);

    return (
        <>
            <Link to={routeConstants.MAIN_ROUTE}>
                <img ref={logoRef} className={styles.logo} src={logo2Img} alt="" />
            </Link>

            <div ref={topContainerRef} className={styles.topContainer}>
                <MobileMenu styles={styles} />

                <Name styles={styles} />

                <NavBarItem
                    styles={styles}
                    route={routeConstants.CONTACTS_ROUTE}
                    src={contactsImg}
                    className={styles.contacts}
                >
                    <Text rus="Контакты" eng="Contacts" est="Kontaktid" />
                </NavBarItem>

                <Lang styles={styles} />
            </div>

            <div ref={bottomContainerRef} className={styles.bottomContainer}>
                <Link to={routeConstants.MAIN_ROUTE}>
                    <img ref={miniLogoRef} className={styles.miniLogo} src={miniLogoImg} alt="" />
                </Link>

                <NavBar styles={styles} />
            </div>
        </>
    );
};

export default Header;
