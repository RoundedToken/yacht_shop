import { INavProductListRes } from './../../../models/interfaces/RTKQuery/INavProductList';

export interface ICardProductList {
    styles: {
        readonly [key: string]: string;
    };
    productList: INavProductListRes[];
    brands: string[];
}
