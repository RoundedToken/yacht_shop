import { TCartSorting } from './../../../models/types/TCartSorting';

export interface ICartSortingItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TCartSorting;
}
