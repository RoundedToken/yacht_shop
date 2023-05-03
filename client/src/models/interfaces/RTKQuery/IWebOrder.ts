import { TDelivery } from './../../types/TDelivery';
import { TLang } from './../../types/TLang';

export interface IWebOrderReq {
    lang: TLang;
    name: string;
    email: string;
    comments: string;
    delivery: TDelivery;
    productList: { id: number; count: number }[];
}

export interface IWebOrderResItem {
    id: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    count: number;
}
export interface IWebOrderRes {
    orderId: number;
    orderList: IWebOrderResItem[];
}
