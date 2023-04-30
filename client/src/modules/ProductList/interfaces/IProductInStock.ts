import { TInStock } from './../../../models/types/TInStock';
export interface IProductInStock {
    styles: {
        readonly [key: string]: string;
    };
    inStock: boolean;
    type: TInStock;
}
