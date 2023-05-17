import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import NavBarItem from './NavBarItem';
import catalogImg from '../../../assets/images/catalog.svg';
import rightArrowImg from '../../../assets/images/rightArrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { switchModalDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import { ICatalog } from '../interfaces/ICatalog';
import { setModalType } from '../../../redux/modalSlice';

const Catalog: FC<ICatalog> = ({ styles }) => {
    const isChecked =
        useSelector((state: RootState) => state.stylesSlice.dropdownDisplay) === 'block';
    const dispatch = useDispatch();
    const isTouchDevice = 'ontouchstart' in document.documentElement;

    const switchOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setModalType('nav'));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <NavBarItem
            styles={styles}
            route={routeConstants.CATEGORIES_ROUTE}
            src={catalogImg}
            className={`${styles.navBar__item} ${styles.catalog}`}
            switcher={
                <>
                    <label
                        style={isTouchDevice ? { display: 'none' } : {}}
                        className={styles.dropdownSwitcher}
                    >
                        <input
                            id="switcher"
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => switchOnClick(e)}
                        />

                        <img id="switcher" src={rightArrowImg} alt="" />
                    </label>
                </>
            }
        >
            <Text id="catalog" rus="Каталог" eng="Catalog" est="Kataloog" />
        </NavBarItem>
    );
};

export default Catalog;
