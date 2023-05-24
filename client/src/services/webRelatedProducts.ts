import {
    INavProductListRes,
    INavProductListReq,
} from '../models/interfaces/RTKQuery/INavProductList';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const webRelatedProductsApi = createApi({
    reducerPath: 'webRelatedProductsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchRelatedProducts: build.query<INavProductListRes[], INavProductListReq>({
            query: ({ id, lang }) => ({
                url: '/web_relatedProducts',
                params: { id, lang },
            }),
        }),
    }),
});
