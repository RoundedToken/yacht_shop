import { TLang } from './../../../models/types/TLang';

export interface ILangItem {
    styles: {
        readonly [key: string]: string;
    };
    lang: TLang;
}
