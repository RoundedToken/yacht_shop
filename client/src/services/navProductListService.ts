import {
    INavProductListRes,
    INavProductListReq,
} from '../models/interfaces/RTKQuery/INavProductList';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navProductListApi = createApi({
    reducerPath: 'navProductListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchProductList: build.query<INavProductListRes[], INavProductListReq>({
            query: ({ id, lang }) => ({
                url: '/nav_goods_list',
                params: { id, lang },
            }),
        }),
    }),
});
