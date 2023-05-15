import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { INavBarItem } from '../interfaces/INavBarItem';

const NavBarItem: FC<INavBarItem> = ({ className, src, route, children, switcher, styles }) => {
    const location = '/' + useLocation().pathname.split('/')[1];
    const newRoute =
        location === routeConstants.CATEGORIES_ROUTE ||
        location === routeConstants.PRODUCT_LIST_ROUTE ||
        location === routeConstants.PRODUCT_ROUTE
            ? routeConstants.CATEGORIES_ROUTE
            : location;
    const isActive = newRoute === route;

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
