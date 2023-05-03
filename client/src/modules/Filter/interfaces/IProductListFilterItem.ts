import { TProductListFilter } from '../../../models/types/TProductListFilter';

export interface IProductListFilterItem {
    styles: {
        readonly [key: string]: string;
    };
    name: React.ReactNode;
    value: TProductListFilter;
}
