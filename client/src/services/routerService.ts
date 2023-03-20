import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const routerApi = createApi({
    reducerPath: 'routerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchAllId: build.query<number[], void>({
            query: () => ({
                url: '/nav_children_of_subr',
                params: { pId: 0 },
            }),
        }),
    }),
});
