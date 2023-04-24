import { INavProductListRes } from '../../../models/interfaces/RTKQuery/INavProductList';

export interface IProductListItem {
    product: INavProductListRes;
    styles: {
        readonly [key: string]: string;
    };
}
