import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebOrderReq } from '../models/interfaces/RTKQuery/IWebOrder';

export const webOrderApi = createApi({
    reducerPath: 'webOrderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchOrder: build.mutation<string, IWebOrderReq>({
            query: ({ lang, name, phone, email, comments, productList }) => ({
                url: '/web_order',
                method: 'POST',
                params: { lang },
                body: { name, phone, email, comments, productList },
            }),
        }),
    }),
});
