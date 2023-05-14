import React from 'react';
import { Navigate } from 'react-router-dom';
import { routeConstants } from '../models/enums/EConstants';

const MainPage = () => {
    return (
        <>
            <Navigate to={routeConstants.CATEGORIES_ROUTE} />
        </>
    );
};

export default MainPage;
