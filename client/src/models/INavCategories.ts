import { TLang } from './TLang';

export interface INavCategoriesRes {
    id: number;
    name: string;
    src: string;
    hasChildren: boolean;
}

export interface INavCategoriesReq {
    id: number;
    brand: string;
    lang: TLang;
}
