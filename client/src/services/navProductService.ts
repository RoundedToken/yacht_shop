import { INavProductRes, INavProductReq } from './../models/INavProduct';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navProductApi = createApi({
    reducerPath: 'navProductsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchProduct: build.query<INavProductRes, INavProductReq>({
            query: ({ tovar, lang }) => ({
                url: '/nav_show_tovar',
                params: { tovar, lang },
            }),
        }),
    }),
});
