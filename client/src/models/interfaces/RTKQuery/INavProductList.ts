import { TLang } from '../../types/TLang';

export interface INavProductListRes {
    id: number;
    name: string;
    brand: string;
    code: string;
    src: string[];
    inStock: boolean;
    price: number;
    rest: number;
    isDecimals: boolean;
}

export interface INavProductListReq {
    id: number;
    lang: TLang;
}
