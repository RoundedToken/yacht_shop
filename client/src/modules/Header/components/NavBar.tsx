import React, { FC } from 'react';
import NavBarItem from './NavBarItem';
import ropeImg from '../../../assets/images/rope.png';
import starImg from '../../../assets/images/starFilled.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import Cart from './Cart';
import Catalog from './Catalog';
import { INavBar } from '../interfaces/INavBar';

const NavBar: FC<INavBar> = ({ styles }) => {
    return (
        <div className={styles.navBar}>
            <Catalog styles={styles} />

            <NavBarItem
                styles={styles}
                route={routeConstants.CRIMPING_ROUTE}
                src={ropeImg}
                className={`${styles.navBar__item} ${styles.crimping}`}
            >
                <Text rus="Обжим тросов" eng="Rope crimping" est="Trossi pressimine" />
            </NavBarItem>

            <NavBarItem
                styles={styles}
                route={routeConstants.FAVORITES_ROUTE}
                src={starImg}
                className={`${styles.navBar__item} ${styles.favorites}`}
            >
                <Text rus="Избранное" eng="Favorites" est="Lemmikud" />
            </NavBarItem>

            <Cart styles={styles} />
        </div>
    );
};

export default NavBar;
