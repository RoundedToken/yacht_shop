import { TLang } from '../../types/TLang';

export interface INavProductRes {
    id: number;
    parentId: number;
    name: string;
    code: string;
    brand: string;
    price: number;
    inStockCount: number;
    brandLogo: string;
    inStock: boolean;
    src: string[];
    relatedCount: number;
    isDecimals: boolean;
}

export interface INavProductReq {
    id: number;
    lang: TLang;
}
