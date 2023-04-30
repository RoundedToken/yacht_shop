import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import { IProductName } from './IProductName';
import styles from './ProductName.module.scss';

const ProductName: FC<IProductName> = ({ id, name }) => {
    return (
        <Link className={styles.productName} to={routeConstants.PRODUCT_ROUTE + `/${id}`}>
            {name}
        </Link>
    );
};

export default ProductName;
