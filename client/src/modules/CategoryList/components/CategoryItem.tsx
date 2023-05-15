import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategoryItem } from '../interfaces/ICategoryItem';
import { routeConstants } from '../../../models/enums/EConstants';

const CategoryItem: FC<ICategoryItem> = ({ id, children, hasChildren, styles, parentId, src }) => {
    return (
        <Link
            className={styles.categoryItem}
            to={
                hasChildren
                    ? routeConstants.CATEGORIES_ROUTE + `/${id}`
                    : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
            }
        >
            <div className={styles.imageContainer}>
                <div className={styles.mask} />
                <img src={src} alt="" />
            </div>
            {children}
        </Link>
    );
};

export default CategoryItem;
