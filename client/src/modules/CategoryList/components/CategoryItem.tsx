import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategoryItem } from '../interfaces/ICategoryItem';
import { routeConstants } from '../../../models/enums/EConstants';

const CategoryItem: FC<ICategoryItem> = ({ id, children, hasChildren, src, styles }) => {
    return (
        <Link
            className={styles.Category__Item}
            to={
                hasChildren
                    ? routeConstants.CATEGORIES_ROUTE + `/${id}`
                    : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
            }
        >
            <img src={src} alt="" />
            {children}
        </Link>
    );
};

export default CategoryItem;