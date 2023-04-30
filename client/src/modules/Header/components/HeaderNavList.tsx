import React, { FC } from 'react';
import HeaderLang from './HeaderLang';
import cartImg from '../../../assets/images/cart.png';
import catalogImg from '../../../assets/images/catalog.png';
import ropeImg from '../../../assets/images/rope.png';
import mapImg from '../../../assets/images/map.png';
import starFilledImg from '../../../assets/images/starFilled.png';
import { routeConstants } from '../../../models/enums/EConstants';
import Text from '../../../UI/Text/Text';
import HeaderNavListItem from './HeaderNavListItem';
import { IHeaderNavList } from '../interfaces/IHeaderNavList';
import CategoryDropdown from './CategoryDropdown';
import rightArrowImg from '../../../assets/images/rightArrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { switchDropdownDisplay } from '../../../redux/stylesSlice';
import { RootState } from '../../../redux/store';

const HeaderNavList: FC<IHeaderNavList> = ({ styles }) => {
    const display = useSelector((state: RootState) => state.stylesSlice.dropdownDisplay);
    const dispatch = useDispatch();

    const switchOnClick = () => {
        dispatch(switchDropdownDisplay());
    };

    return (
        <div className={styles.navBar}>
            <div className={styles.catalogContainer}>
                <div className={styles.navItem}>
                    <img id="catalog" src={catalogImg} alt="" />
                    <Text id="catalog" rus="Каталог" eng="Catalog" est="Kataloog" />
                </div>

                <label className={styles.dropdownSwitcher}>
                    <input
                        id="dropdownSwitcher"
                        readOnly
                        checked={display === 'none' ? false : true}
                        type="checkbox"
                        onClick={switchOnClick}
                    />
                    <img id="navTrigger" src={rightArrowImg} alt="" width={24} height={24} />
                </label>

                <CategoryDropdown styles={styles} />
            </div>

            <HeaderNavListItem route={routeConstants.CRIMPING_ROUTE} src={ropeImg} styles={styles}>
                <Text rus="Обжим тросов" eng="Rope crimping" est="Trossid krimpsutamine" />
            </HeaderNavListItem>

            <HeaderNavListItem route={routeConstants.CONTACTS_ROUTE} src={mapImg} styles={styles}>
                <Text rus="Контакты" eng="Contacts" est="Kontaktid" />
            </HeaderNavListItem>

            <HeaderNavListItem route={routeConstants.CART_ROUTE} src={cartImg} styles={styles}>
                <Text rus="Корзина" eng="Cart" est="Ostukorv" />
            </HeaderNavListItem>

            <HeaderNavListItem
                route={routeConstants.FAVORITES_ROUTE}
                src={starFilledImg}
                styles={styles}
            >
                <Text rus="Избранное" eng="Favorites" est="Lemmikud" />
            </HeaderNavListItem>

            <HeaderLang styles={styles} />
        </div>
    );
};

export default HeaderNavList;
