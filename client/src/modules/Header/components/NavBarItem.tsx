import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { INavBarItem } from '../interfaces/INavBarItem';

const NavBarItem: FC<INavBarItem> = ({ className, src, route, children, switcher, styles }) => {
    const isActive = '/' + useLocation().pathname.split('/')[1] === route;

    return (
        <div className={`${className} ${isActive ? styles.activeRoute : ''}`}>
            <Link to={route}>
                <img src={src} alt="" />
            </Link>

            <Link to={route}>{children}</Link>

            {switcher}
        </div>
    );
};

export default NavBarItem;
