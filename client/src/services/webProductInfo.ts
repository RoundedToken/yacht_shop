import { IWebProductInfoReq } from '../models/interfaces/RTKQuery/IWebProductInfo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const webProductInfoApi = createApi({
    reducerPath: 'webProductInfoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchProductInfo: build.query<string[][], IWebProductInfoReq>({
            query: ({ tovar }) => ({
                url: '/web_tovar_parameters',
                params: { tovar },
            }),
        }),
    }),
});
