import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { iProductListItem } from '../../models/IProductListItem';
import { routeConstants } from '../../routes/constants';

const ProductListItem: FC<iProductListItem> = ({ id, src, children }) => {
    const navigate = useNavigate();
    const productListItemOnClick = () => {
        navigate(routeConstants.PRODUCT_ROUTE + `/${id}`);
    };

    return (
        <div>
            <div onClick={productListItemOnClick}>
                <img src={src} alt="" width={160} height={100} />
                {children}
            </div>
        </div>
    );
};

export default ProductListItem;
