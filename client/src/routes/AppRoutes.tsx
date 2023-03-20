import MainPage from '../pages/MainPage';
import { routeConstants } from './constants';
import React from 'react';
import { routerApi } from '../services/routerService';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import CartPage from '../pages/CartPage';
import ContactsPage from '../pages/ContactsPage';
import CableCrimpingPage from '../pages/CableCrimpingPage';

const AppRoutes = () => {
    const { data: categoryId } = routerApi.useFetchAllIdQuery();

    return (
        <Routes>
            {categoryId &&
                categoryId.map((id) => (
                    <Route
                        key={id}
                        path={routeConstants.CATEGORIES_ROUTE + `/${id}`}
                        element={<CategoryPage id={id} />}
                    />
                ))}

            <Route path={routeConstants.MAIN_ROUTE} element={<MainPage />} />
            <Route path={routeConstants.CART_ROUTE} element={<CartPage />} />
            <Route path={routeConstants.CONTACTS_ROUTE} element={<ContactsPage />} />
            <Route path={routeConstants.CABLE_CRIMPING_ROUTE} element={<CableCrimpingPage />} />
        </Routes>
    );
};

export default AppRoutes;
