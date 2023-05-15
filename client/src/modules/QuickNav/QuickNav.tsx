import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import { pushToCategoryList } from '../../redux/navSlice';
import { clearBrands } from '../../redux/sideBarSlice';
import { RootState } from '../../redux/store';
import { switchDropdownDisplay } from '../../redux/stylesSlice';
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
                    dispatch(switchDropdownDisplay());
                    dispatch(clearBrands());
                }
            } else if (dropdownDisplay === 'block' && idAttribute !== 'switcher')
                dispatch(switchDropdownDisplay());
        };
        const closeOnPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && dropdownDisplay === 'block')
                dispatch(switchDropdownDisplay());
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

    useEffect(() => {
        if (dropdownRef.current) dropdownRef.current.style.display = dropdownDisplay;
    }, [dropdownDisplay]);

    return (
        <div className={styles.categoryDropdown}>
            <ul ref={dropdownRef} className={styles.nestedDropdown}>
                {data &&
                    data[0].children?.map((child1) => (
                        <DropdownItem treeItem={child1} key={child1.id}>
                            {child1.children?.map((child2) => (
                                <DropdownItem treeItem={child2} key={child2.id}>
                                    {child2.children?.map((child3) => (
                                        <DropdownItem treeItem={child3} key={child3.id}>
                                            {child3.children?.map((child4) => (
                                                <DropdownItem
                                                    treeItem={child4}
                                                    key={child4.id}
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
    );
};

export default QuickNav;
