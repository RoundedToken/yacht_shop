import React, { useEffect, useRef } from 'react';
import HeaderLogo from './components/HeaderLogo';
import HeaderName from './components/HeaderName';
import HeaderNavList from './components/HeaderNavList';
import NavTitle from './components/NavTitle';
import SearchBar from './components/SearchBar';
import styles from './Header.module.scss';

const Header = () => {
    const headerBlockRef = useRef<HTMLDivElement>(null);
    const headerStickyRef = useRef<HTMLDivElement>(null);
    const headerStaticRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const offset = headerStickyRef.current?.offsetTop;
        const diff = (offset || 0) - window.pageYOffset;
        window.onscroll = function () {
            if (
                headerStickyRef.current &&
                offset &&
                headerBlockRef.current &&
                headerStaticRef.current
            ) {
                const opacity = (offset - window.pageYOffset) / diff;
                const rotate = ((offset - window.pageYOffset) * 90) / diff;

                if (window.pageYOffset > offset) {
                    headerStickyRef.current.classList.add('headerSticky');
                    headerStickyRef.current.style.transition = ' background-color 0.5s ease-in-out';

                    headerBlockRef.current.classList.add('header');
                } else {
                    headerStickyRef.current.classList.remove('headerSticky');
                    headerStickyRef.current.style.transition = 'none';

                    headerStaticRef.current.style.opacity = `${opacity}`;
                    headerStaticRef.current.style.transform = `rotateX(${90 - rotate}deg)`;

                    headerBlockRef.current.classList.remove('header');
                }
            }
        };
    }, []);

    return (
        <div ref={headerBlockRef} className={styles.header}>
            <div ref={headerStaticRef} className={styles.headerStatic}>
                <HeaderLogo styles={styles} />

                <HeaderName styles={styles} />
            </div>

            <div ref={headerStickyRef} className={styles.headerSticky}>
                <NavTitle />

                <HeaderNavList styles={styles} />

                <SearchBar styles={styles} />
            </div>
        </div>
    );
};

export default Header;
