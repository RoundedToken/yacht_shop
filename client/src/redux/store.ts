import modalSlice from './modalSlice';
import sideBarSlice from './sideBarSlice';
import { webSearchApi } from './../services/webSearch';
import { navTreeApi } from './../services/navTree';
import favoritesSlice from './favoritesSlice';
import stylesSlice from './stylesSlice';
import cartSlice from './cartSlice';
import { navProductApi } from './../services/navProductService';
import langSlice from './langSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navSlice from './navSlice';
import { navProductListApi } from '../services/navProductListService';
import { webProductInfoApi } from '../services/webProductInfo';
import { webCartProductList } from '../services/webCartProductList';
import { webOrderApi } from '../services/webOrder';

const rootReducer = combineReducers({
    [navProductListApi.reducerPath]: navProductListApi.reducer,
    [navProductApi.reducerPath]: navProductApi.reducer,
    [webProductInfoApi.reducerPath]: webProductInfoApi.reducer,
    [webCartProductList.reducerPath]: webCartProductList.reducer,
    [webOrderApi.reducerPath]: webOrderApi.reducer,
    [navTreeApi.reducerPath]: navTreeApi.reducer,
    [webSearchApi.reducerPath]: webSearchApi.reducer,
    navSlice,
    langSlice,
    cartSlice,
    stylesSlice,
    favoritesSlice,
    sideBarSlice,
    modalSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                navProductListApi.middleware,
                navProductApi.middleware,
                webProductInfoApi.middleware,
                webCartProductList.middleware,
                webOrderApi.middleware,
                navTreeApi.middleware,
                webSearchApi.middleware
            ),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
