import React, { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pushToCategoryList } from '../../../redux/navSlice';
import { IDropdownItem } from '../interfaces/IDropdownItem';

const DropdownItem: FC<IDropdownItem> = ({ children, treeItem }) => {
    const ref = useRef<HTMLLIElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pushToCategoryList(treeItem));
    }, [dispatch, treeItem]);

    return (
        <li
            ref={ref}
            id={
                treeItem.children
                    ? `navigate_category_${treeItem.id} `
                    : `navigate_products_${treeItem.id}`
            }
        >
            {treeItem.name}
            <ul hidden={treeItem.children ? false : true}>{children}</ul>
        </li>
    );
};

export default DropdownItem;
