import { IWebCartProductListRes } from '../../../models/interfaces/RTKQuery/IWebCartProductList';

export interface ICartProductList {
    styles: {
        readonly [key: string]: string;
    };
    productList?: IWebCartProductListRes[];
}
