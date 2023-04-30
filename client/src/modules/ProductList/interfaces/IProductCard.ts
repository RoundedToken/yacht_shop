import { INavProductListRes } from './../../../models/interfaces/RTKQuery/INavProductList';

export interface IProductCard {
    styles: {
        readonly [key: string]: string;
    };
    product: INavProductListRes;
}
