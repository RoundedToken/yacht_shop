import {
    IWebCartProductListRes,
    IWebCartProductListReq,
} from './../models/interfaces/RTKQuery/IWebCartProductList';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const webCartProductList = createApi({
    reducerPath: 'webCartProductListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    endpoints: (build) => ({
        fetchCartProductList: build.query<IWebCartProductListRes[], IWebCartProductListReq>({
            query: ({ idList, lang }) => ({
                url: '/web_cart_product_list',
                params: { idList: idList, lang: lang },
            }),
        }),
    }),
});
