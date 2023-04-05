import { TLang } from './../../types/TLang';

export interface IWebOrderReq {
    lang: TLang;
    name: string;
    email: string;
    phone: string;
    comments: string;
    productList: { id: number; count: number }[];
}
