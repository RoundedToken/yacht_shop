import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import { pushToCategoryList } from '../../redux/navSlice';
import { clearBrands } from '../../redux/sideBarSlice';
import { RootState } from '../../redux/store';
import { switchModalDisplay } from '../../redux/stylesSlice';
import { navTreeApi } from '../../services/navTree';
import DropdownItem from './components/DropdownItem';
import styles from './QuickNav.module.scss';

const QuickNav = () => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const dropdownRef = useRef<HTMLUListElement>(null);
    const dropdownDisplay = useSelector((state: RootState) => state.stylesSlice.dropdownDisplay);
    const navigate = useNavigate();
    const { data } = navTreeApi.useFetchAllIdQuery(lang);
    const dispatch = useDispatch();

    useEffect(() => {
        const navigateOnClick = (e: MouseEvent) => {
            const idAttribute = (e.target as HTMLElement).getAttribute('id');

            if (idAttribute) {
                const idSplit = idAttribute.split('_');
                if (idSplit[0] === 'navigate') {
                    navigate(
                        idSplit[1] === 'category'
                            ? routeConstants.CATEGORIES_ROUTE + `/${idSplit[2]}`
                            : routeConstants.PRODUCT_LIST_ROUTE + `/${idSplit[2]}`
                    );
                    dispatch(switchModalDisplay());
                    dispatch(clearBrands());
                    document.body.style.overflow = 'auto';
                }
            }
        };

        const closeOnPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && dropdownDisplay === 'block') dispatch(switchModalDisplay());
        };

        window.addEventListener('click', navigateOnClick);
        window.addEventListener('keydown', closeOnPress);

        return () => {
            window.removeEventListener('click', navigateOnClick);
            window.removeEventListener('keydown', closeOnPress);
        };
    }, [dispatch, navigate, dropdownDisplay]);

    useEffect(() => {
        if (data) dispatch(pushToCategoryList(data[0]));
    }, [dispatch, data]);

    const closeOnClick = () => {
        dispatch(switchModalDisplay());
        dispatch(clearBrands());
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <div className={styles.close} onClick={closeOnClick}>
                &times;
            </div>
            <div className={styles.categoryDropdown}>
                <ul ref={dropdownRef} className={styles.nestedDropdown}>
                    {data &&
                        data[0].children?.map((child1) => (
                            <DropdownItem
                                styles={styles}
                                treeItem={child1}
                                key={child1.id}
                                level={1}
                            >
                                {child1.children?.map((child2) => (
                                    <DropdownItem
                                        styles={styles}
                                        treeItem={child2}
                                        key={child2.id}
                                        level={2}
                                    >
                                        {child2.children?.map((child3) => (
                                            <DropdownItem
                                                styles={styles}
                                                treeItem={child3}
                                                key={child3.id}
                                                level={3}
                                            >
                                                {child3.children?.map((child4) => (
                                                    <DropdownItem
                                                        styles={styles}
                                                        treeItem={child4}
                                                        key={child4.id}
                                                        level={4}
                                                    ></DropdownItem>
                                                ))}
                                            </DropdownItem>
                                        ))}
                                    </DropdownItem>
                                ))}
                            </DropdownItem>
                        ))}
                </ul>
            </div>
        </>
    );
};

export default QuickNav;
