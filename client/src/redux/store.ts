import langSlice from './langSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { navChildrenApi } from '../services/navChildrenService';
import { routerApi } from '../services/routerService';
import navSlice from './navSlice';

const rootReducer = combineReducers({
    [navChildrenApi.reducerPath]: navChildrenApi.reducer,
    [routerApi.reducerPath]: routerApi.reducer,
    navSlice,
    langSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(navChildrenApi.middleware, routerApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
