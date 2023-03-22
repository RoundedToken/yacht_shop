import { navProductApi } from './../services/navProductService';
import langSlice from './langSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { navCategoriesApi } from '../services/navCategoriesService';
import { routerApi } from '../services/routerService';
import navSlice from './navSlice';
import { navProductListApi } from '../services/navProductListService';
import { webProductInfoApi } from '../services/webProductInfo';
import { navBrandsApi } from '../services/navBrandsService';

const rootReducer = combineReducers({
    [navCategoriesApi.reducerPath]: navCategoriesApi.reducer,
    [routerApi.reducerPath]: routerApi.reducer,
    [navProductListApi.reducerPath]: navProductListApi.reducer,
    [navProductApi.reducerPath]: navProductApi.reducer,
    [webProductInfoApi.reducerPath]: webProductInfoApi.reducer,
    [navBrandsApi.reducerPath]: navBrandsApi.reducer,
    navSlice,
    langSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                navCategoriesApi.middleware,
                routerApi.middleware,
                navProductListApi.middleware,
                navProductApi.middleware,
                webProductInfoApi.middleware,
                navBrandsApi.middleware
            ),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
