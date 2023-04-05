import { TLang } from './../../types/TLang';

export interface IWebCartProductListRes {
    id: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    inStockCount: number;
    src: string;
}

export interface IWebCartProductListReq {
    idList: number[];
    lang: TLang;
}
