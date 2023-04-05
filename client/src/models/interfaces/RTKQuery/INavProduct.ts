import { TLang } from '../../types/TLang';

export interface INavProductRes {
    name: string;
    code: string;
    brand: string;
    price: number;
    inStockCount: number;
    brandLogo: string;
}

export interface INavProductReq {
    tovar: number;
    lang: TLang;
}
