import { TLang } from './../../types/TLang';

export interface IWebSearchRes {
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

export interface IWebSearchReq {
    searchStr: string;
    lang: TLang;
}
