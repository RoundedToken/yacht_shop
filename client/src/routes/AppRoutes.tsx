import MainPage from '../pages/MainPage';
import { routeConstants } from '../models/enums/EConstants';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import CartPage from '../pages/CartPage';
import ContactsPage from '../pages/ContactsPage';
import CableCrimpingPage from '../pages/CrimpingPage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';
import FavoritesPage from '../pages/FavoritesPage';
import RefreshPage from '../pages/RefreshPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routeConstants.CATEGORIES_ROUTE + '/:id'} element={<CategoryPage />} />
            <Route
                path={routeConstants.CATEGORIES_ROUTE}
                element={<Navigate to={routeConstants.CATEGORIES_ROUTE + '/0'} />}
            />
            <Route
                path={routeConstants.PRODUCT_LIST_ROUTE + '/:id'}
                element={<ProductListPage />}
            />
            <Route path={routeConstants.PRODUCT_ROUTE + '/:id'} element={<ProductPage />} />
            <Route path={routeConstants.MAIN_ROUTE} element={<MainPage />} />
            <Route path={routeConstants.CART_ROUTE} element={<CartPage />} />
            <Route path={routeConstants.CONTACTS_ROUTE} element={<ContactsPage />} />
            <Route path={routeConstants.CRIMPING_ROUTE} element={<CableCrimpingPage />} />
            <Route path={routeConstants.FAVORITES_ROUTE} element={<FavoritesPage />} />

            <Route path="/refresh" element={<RefreshPage />} />
            <Route path="*" element={<Navigate to={routeConstants.CATEGORIES_ROUTE + '/0'} />} />
        </Routes>
    );
};

export default AppRoutes;
