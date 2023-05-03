import { IWebCartProductListRes } from '../../../models/interfaces/RTKQuery/IWebCartProductList';

export interface ITableFavoritesList {
    styles: {
        readonly [key: string]: string;
    };
    data: IWebCartProductListRes[];
    brands: string[];
}
