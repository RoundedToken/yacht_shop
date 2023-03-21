import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICategoryItem } from '../../models/ICategoryItem';
import { routeConstants } from '../../routes/constants';

const CategoriesItem: FC<ICategoryItem> = ({ id, children, hasChildren, src }) => {
    const navigate = useNavigate();

    const categoryOnClick = () => {
        hasChildren
            ? navigate(routeConstants.CATEGORIES_ROUTE + `/${id}`)
            : navigate(routeConstants.PRODUCT_LIST_ROUTE + `/${id}`);
    };

    return (
        <div>
            <div onClick={categoryOnClick}>
                <img src={src} alt="" width={160} height={100} />
                {children}
            </div>
        </div>
    );
};

export default CategoriesItem;
