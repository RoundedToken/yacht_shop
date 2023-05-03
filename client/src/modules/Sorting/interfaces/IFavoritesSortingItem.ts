import { TSort } from './../../../models/types/TSort';
import { TFavoritesSorting } from './../../../models/types/TFavoritesSorting';

export interface IFavoritesSortingItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TFavoritesSorting;
    sortType: TSort;
}
