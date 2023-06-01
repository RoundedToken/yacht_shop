import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { IBreadcrumbsDropdown } from '../interfaces/IBreadcrumbsDropdown';

const BreadcrumbsDropdown: FC<IBreadcrumbsDropdown> = ({ styles, children }) => {
    return (
        <div className={styles.dropdown}>
            {children.map((category) => (
                <Link
                    to={
                        category.children
                            ? routeConstants.CATEGORIES_ROUTE + `/${category.id}`
                            : routeConstants.PRODUCT_LIST_ROUTE + `/${category.id}`
                    }
                    key={category.id}
                    className={styles.dropdownItem}
                >
                    <div className={styles.symbol}>&#9658;</div>
                    {category.name}
                </Link>
            ))}
        </div>
    );
};

export default BreadcrumbsDropdown;
