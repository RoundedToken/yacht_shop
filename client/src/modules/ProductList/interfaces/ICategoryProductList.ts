import { TLang } from './../../../models/types/TLang';

export interface ICategoryProductList {
    styles: {
        readonly [key: string]: string;
    };
    brands: string[];
    lang: TLang;
}
