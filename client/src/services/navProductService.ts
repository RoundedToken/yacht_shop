import { INavProductRes, INavProductReq } from '../models/interfaces/RTKQuery/INavProduct';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navProductApi = createApi({
    reducerPath: 'navProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchProduct: build.query<INavProductRes, INavProductReq>({
            query: ({ id, lang }) => ({
                url: '/nav_show_tovar',
                params: { id, lang },
            }),
        }),
    }),
});
