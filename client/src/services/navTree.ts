import { TLang } from './../models/types/TLang';
import { INavTreeItem } from './../models/interfaces/RTKQuery/INavTree';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navTreeApi = createApi({
    reducerPath: 'navTreeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchAllId: build.query<INavTreeItem[], TLang>({
            query: (lang) => ({
                url: '/nav_tree',
                params: { lang },
            }),
        }),
    }),
});
