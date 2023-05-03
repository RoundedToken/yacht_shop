import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IWebOrderReq, IWebOrderRes } from '../models/interfaces/RTKQuery/IWebOrder';

export const webOrderApi = createApi({
    reducerPath: 'webOrderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchOrder: build.mutation<IWebOrderRes, IWebOrderReq>({
            query: ({ lang, name, email, comments, productList, delivery }) => ({
                url: '/web_order',
                method: 'POST',
                params: { lang },
                body: { name, email, comments, delivery, productList },
            }),
        }),
    }),
});
