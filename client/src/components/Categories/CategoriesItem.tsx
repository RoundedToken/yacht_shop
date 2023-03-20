import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../routes/constants';

interface ICategoryItem {
    id: number;
    children: React.ReactNode;
}

const CategoriesItem: FC<ICategoryItem> = ({ id, children }) => {
    const navigate = useNavigate();

    const categoryOnClick = () => {
        navigate(routeConstants.CATEGORIES_ROUTE + `/${id}`);
    };

    return (
        <div>
            <p onClick={categoryOnClick}>{children}</p>
        </div>
    );
};

export default CategoriesItem;
