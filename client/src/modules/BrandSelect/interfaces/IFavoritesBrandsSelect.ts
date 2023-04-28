import { TLang } from '../../../models/types/TLang';

export interface IFavoritesBrandSelect {
    styles: {
        readonly [key: string]: string;
    };
    selectedBrands: string[];
    brandOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    lang: TLang;
    locationPath: string;
}
