import { TLang } from '../../types/TLang';

export interface IWebCrimpingReq {
    lang: TLang;
    diameter: string;
    length: string;
    end1: string;
    end2: string;
}

export interface IWebCrimpingRes {
    id: number;
    count: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    isDecimals: boolean;
}
