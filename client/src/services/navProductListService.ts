import { INavProductListRes, INavProductListReq } from './../models/INavProductList';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const navProductListApi = createApi({
    reducerPath: 'navProductListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchProductList: build.query<INavProductListRes[], INavProductListReq>({
            query: ({ subr, brand, fw, inSubr, ip, lang }) => ({
                url: '/nav_goods_list',
                params: { subr, brand, fw, inSubr, ip, lang },
            }),
        }),
    }),
});
