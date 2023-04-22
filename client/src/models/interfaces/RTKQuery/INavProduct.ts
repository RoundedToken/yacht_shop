import { TLang } from '../../types/TLang';

export interface INavProductRes {
    parentId: number;
    name: string;
    code: string;
    brand: string;
    price: number;
    inStockCount: number;
    brandLogo: string;
}

export interface INavProductReq {
    id: number;
    lang: TLang;
}
