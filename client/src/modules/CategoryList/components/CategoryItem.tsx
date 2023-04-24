import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategoryItem } from '../interfaces/ICategoryItem';
import { routeConstants } from '../../../models/enums/EConstants';

const CategoryItem: FC<ICategoryItem> = ({ id, children, hasChildren, styles, parentId }) => {
    return (
        <Link
            className={styles.categoryItem}
            to={
                hasChildren
                    ? routeConstants.CATEGORIES_ROUTE + `/${id}`
                    : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
            }
        >
            <img
                src={`${process.env.REACT_APP_IMG_URL}/images/subr/${id}.${
                    parentId === 0 ? 'gif' : 'jpg'
                }`}
                alt=""
            />
            {children}
        </Link>
    );
};

export default CategoryItem;
