import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { pushToCategoryList } from '../../../redux/navSlice';
import { RootState } from '../../../redux/store';
import { navTreeApi } from '../../../services/navTree';
import { ICategoryDropdown } from '../interfaces/ICategoryDropdown';
import DropdownItem from './DropdownItem';

const CategoryDropdown: FC<ICategoryDropdown> = ({ styles }) => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const navigate = useNavigate();
    const { data } = navTreeApi.useFetchAllIdQuery(lang);
    const dispatch = useDispatch();

    useEffect(() => {
        const navigateOnClick = (e: MouseEvent) => {
            const idAttribute = (e.target as HTMLElement).getAttribute('id');

            if (idAttribute) {
                if (idAttribute === 'catalog') navigate(routeConstants.CATEGORIES_ROUTE + '/0');

                const idSplit = idAttribute.split('_');
                if (idSplit[0] === 'navigate') {
                    navigate(
                        idSplit[1] === 'category'
                            ? routeConstants.CATEGORIES_ROUTE + `/${idSplit[2]}`
                            : routeConstants.PRODUCT_LIST_ROUTE + `/${idSplit[2]}`
                    );
                }
            }
        };

        if (data) dispatch(pushToCategoryList(data[0]));

        window.addEventListener('click', navigateOnClick);

        return () => window.removeEventListener('click', navigateOnClick);
    }, [dispatch, data, navigate]);

    return (
        <div className={styles.categoryDropdown}>
            <ul className={styles.nestedDropdown}>
                {data &&
                    data[0].children?.map((child1) => (
                        <DropdownItem treeItem={child1} key={child1.id}>
                            {child1.name}

                            <ul>
                                {child1.children?.map((child2) => (
                                    <DropdownItem treeItem={child2} key={child2.id}>
                                        {child2.name}

                                        <ul>
                                            {child2.children?.map((child3) => (
                                                <DropdownItem treeItem={child3} key={child3.id}>
                                                    {child3.name}

                                                    <ul>
                                                        {child3.children?.map((child4) => (
                                                            <DropdownItem
                                                                treeItem={child4}
                                                                key={child4.id}
                                                            >
                                                                {child4.name}
                                                            </DropdownItem>
                                                        ))}
                                                    </ul>
                                                </DropdownItem>
                                            ))}
                                        </ul>
                                    </DropdownItem>
                                ))}
                            </ul>
                        </DropdownItem>
                    ))}
            </ul>
        </div>
    );
};

export default CategoryDropdown;
