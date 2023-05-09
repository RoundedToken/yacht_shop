import { TFavoritesSorting } from './../../../models/types/TFavoritesSorting';

export interface IFavoritesSortingItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TFavoritesSorting;
}
