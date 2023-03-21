import MainPage from '../pages/MainPage';
import { routeConstants } from './constants';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import CartPage from '../pages/CartPage';
import ContactsPage from '../pages/ContactsPage';
import CableCrimpingPage from '../pages/CableCrimpingPage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path={routeConstants.CATEGORIES_ROUTE + '/:categoryId'}
                element={<CategoryPage />}
            />
            <Route
                path={routeConstants.PRODUCT_LIST_ROUTE + '/:productListId'}
                element={<ProductListPage />}
            />
            <Route path={routeConstants.PRODUCT_ROUTE + '/:productId'} element={<ProductPage />} />
            <Route path={routeConstants.MAIN_ROUTE} element={<MainPage />} />
            <Route path={routeConstants.CART_ROUTE} element={<CartPage />} />
            <Route path={routeConstants.CONTACTS_ROUTE} element={<ContactsPage />} />
            <Route path={routeConstants.CABLE_CRIMPING_ROUTE} element={<CableCrimpingPage />} />
        </Routes>
    );
};

export default AppRoutes;
