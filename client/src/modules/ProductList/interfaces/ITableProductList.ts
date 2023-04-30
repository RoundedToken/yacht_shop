import { INavProductListRes } from './../../../models/interfaces/RTKQuery/INavProductList';

export interface ITableProductList {
    styles: {
        readonly [key: string]: string;
    };
    productList: INavProductListRes[];
    brands: string[];
}
