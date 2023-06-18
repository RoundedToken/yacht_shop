import { IWebCrimpingReq, IWebCrimpingRes } from '../models/interfaces/RTKQuery/IWebCrimping';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const webCrimpingApi = createApi({
    reducerPath: 'webCrimpingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchCartProductList: build.query<IWebCrimpingRes[], IWebCrimpingReq>({
            query: ({ lang, diameter, length, end1, end2 }) => ({
                url: '/web_crimping',
                params: { lang, diameter, length, end1, end2 },
            }),
        }),
    }),
});
