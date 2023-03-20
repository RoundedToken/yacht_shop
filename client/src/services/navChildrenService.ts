import { INavChildrenRes, INavChildrenReq } from './../models/INavChildren';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navChildrenApi = createApi({
    reducerPath: 'navChildrenApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    tagTypes: ['Category'],
    endpoints: (build) => ({
        fetchAllChildren: build.query<INavChildrenRes[], number>({
            query: (id) => ({
                url: '/nav_showChildren',
                params: { id: id, brand: '', lang: 'rus' },
            }),
            providesTags: () => ['Category'],
        }),
    }),
});
