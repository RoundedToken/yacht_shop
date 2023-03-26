import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navBrandsApi = createApi({
    reducerPath: 'navBrandsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchBrands: build.query<{ brand: string }[], number>({
            query: (subr) => ({
                url: '/nav_brands_of_subr_plain',
                params: { subr },
            }),
        }),
    }),
});
