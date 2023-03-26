import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../routes/constants';
import HeaderLogo from './HeaderLogo';
import styles from './Header.module.scss';
import HeaderNavList from './HeaderNavList';
import Text from '../Text/Text';

const Header = () => {
    const navigate = useNavigate();
    const mainOnClick = () => {
        navigate(routeConstants.MAIN_ROUTE);
    };

    return (
        <div className={styles.Header}>
            <div onClick={mainOnClick} className={styles.Header__Left}>
                <HeaderLogo className={styles.Header__Logo} width={806 * 0.2} height={696 * 0.2} />
            </div>

            <div className={styles.Header__Right}>
                <div className={styles.Header__Name} onClick={mainOnClick}>
                    <Text
                        rus="Все для яхт и яхтсменов"
                        eng="All for boats and sailors"
                        est="Kõik paatide ja meremeeste jaoks"
                    />
                </div>

                <HeaderNavList styles={styles} />
            </div>
        </div>
    );
};

export default Header;
