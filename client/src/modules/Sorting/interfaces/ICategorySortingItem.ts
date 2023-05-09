import { TCategorySorting } from './../../../models/types/TCategorySorting';

export interface ICategorySortingItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TCategorySorting;
}
