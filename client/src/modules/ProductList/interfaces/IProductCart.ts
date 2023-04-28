import { INavProductListRes } from './../../../models/interfaces/RTKQuery/INavProductList';

export interface IProductCart {
    styles: {
        readonly [key: string]: string;
    };
    product: INavProductListRes;
}
