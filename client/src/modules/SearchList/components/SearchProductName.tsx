import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { ISearchProductName } from '../interfaces/ISearchProductName';

const SearchProductName: FC<ISearchProductName> = ({ id, src, name }) => {
    return (
        <>
            <Link to={routeConstants.PRODUCT_ROUTE + `/${id}`}>
                <img src={src} alt="" />
            </Link>

            <Link to={routeConstants.PRODUCT_ROUTE + `/${id}`}> {name}</Link>
        </>
    );
};

export default SearchProductName;
