import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { IBreadcrumbsItem } from '../interfaces/IBreadcrumbsItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import BreadcrumbsDropdown from './BreadcrumbsDropdown';
import arrowImg from '../../../assets/images/arrow.png';

const BreadcrumbsItem: FC<IBreadcrumbsItem> = ({ styles, id, name, hasChildren, isLast }) => {
    const children = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (product) => product.id === id
    )?.children;

    return (
        <>
            <div className={styles.breadcrumbsItem}>
                <Link
                    className={styles.breadcrumbsItemLink}
                    to={
                        hasChildren
                            ? routeConstants.CATEGORIES_ROUTE + `/${id}`
                            : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
                    }
                >
                    {name}
                </Link>

                {/* {isLast && <div className={styles.symbolLast}> &#9660;</div>} */}

                {children && <BreadcrumbsDropdown styles={styles} children={children} />}
            </div>
            {hasChildren && (
                <div className={styles.arrow}>
                    <img src={arrowImg} alt="" />
                </div>
            )}
        </>
    );
};

export default BreadcrumbsItem;
