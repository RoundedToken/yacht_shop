import { ICartProduct } from './../../../models/interfaces/slices/ICartState';
import { IWebCartProductListRes } from '../../../models/interfaces/RTKQuery/IWebCartProductList';

export interface ICartProductList {
    styles: {
        readonly [key: string]: string;
    };
    data: IWebCartProductListRes[];
    productList: ICartProduct[];
}
