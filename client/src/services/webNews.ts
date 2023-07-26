import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TLang } from '../models/types/TLang';
import { IWebNewsRes } from '../models/interfaces/RTKQuery/IWebNews';

export const webNewsApi = createApi({
    reducerPath: 'webNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchNews: build.query<IWebNewsRes[], TLang>({
            query: (lang) => ({
                url: '/web_news',
                params: { lang },
            }),
        }),
    }),
});
