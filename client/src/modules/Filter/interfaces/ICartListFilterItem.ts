import { TCartListFilter } from './../../../models/types/TCartListFilter';

export interface ICartListFilterItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TCartListFilter;
}
