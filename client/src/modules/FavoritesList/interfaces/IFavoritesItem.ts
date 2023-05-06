import { IWebCartProductListRes } from './../../../models/interfaces/RTKQuery/IWebCartProductList';
export interface IFavoritesItem {
    product: IWebCartProductListRes;
    styles: {
        readonly [key: string]: string;
    };
}
