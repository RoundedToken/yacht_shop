import { INavCategoriesRes, INavCategoriesReq } from '../models/INavCategories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navCategoriesApi = createApi({
    reducerPath: 'navCategoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchCategories: build.query<INavCategoriesRes[], INavCategoriesReq>({
            query: ({ id, brand, lang }) => ({
                url: '/nav_showChildren',
                params: { id, brand, lang },
            }),
        }),
    }),
});
