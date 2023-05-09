import { TProductListSorting } from './../../../models/types/TProductListSorting';

export interface IProductListSortingItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TProductListSorting;
}
