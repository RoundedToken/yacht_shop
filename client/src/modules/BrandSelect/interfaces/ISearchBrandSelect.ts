import { TLang } from '../../../models/types/TLang';

export interface ISearchBrandSelect {
    styles: {
        readonly [key: string]: string;
    };
    selectedBrands: string[];
    brandOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    lang: TLang;
    locationPath: string;
    locationParams: string;
}
