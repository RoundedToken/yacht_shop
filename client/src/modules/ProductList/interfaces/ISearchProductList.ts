import { TLang } from '../../../models/types/TLang';

export interface ISearchProductList {
    styles: {
        readonly [key: string]: string;
    };
    brands: string[];
    lang: TLang;
}
