import { TLang } from './TLang';

export interface INavProductListRes {
    id: number;
    name: string;
    brand: string;
    code: string;
    src: string;
    inStock: boolean;
    price: number;
}

export interface INavProductListReq {
    subr: number;
    brand: string;
    fw: string;
    inSubr: string;
    ip: string;
    lang: TLang;
}
