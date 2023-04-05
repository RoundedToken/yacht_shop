import { TLang } from '../../../models/types/TLang';

export interface ILangOption {
    styles: {
        readonly [key: string]: string;
    };
    lang: TLang;
}
