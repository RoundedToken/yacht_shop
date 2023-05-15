import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { IBreadcrumbsItem } from '../interfaces/IBreadcrumbsItem';

const BreadcrumbsItem: FC<IBreadcrumbsItem> = ({ styles, id, name, hasChildren, isLast }) => {
    return (
        <div className={styles.breadcrumbsItem}>
            <Link
                to={
                    hasChildren
                        ? routeConstants.CATEGORIES_ROUTE + `/${id}`
                        : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
                }
            >
                {name}
            </Link>
            {isLast ? '\u{25BC}' : '\u{25CF}'}
        </div>
    );
};

export default BreadcrumbsItem;
