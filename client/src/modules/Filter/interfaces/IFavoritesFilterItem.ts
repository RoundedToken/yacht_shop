import { TFavoritesFilter } from './../../../models/types/TFavoritesFilter';

export interface IFavoritesFilterItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TFavoritesFilter;
}
