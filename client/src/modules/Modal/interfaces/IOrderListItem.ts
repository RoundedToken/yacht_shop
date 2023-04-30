import { IWebCartProductListRes } from '../../../models/interfaces/RTKQuery/IWebCartProductList';

export interface IOrderListItem {
    index: number;
    product: IWebCartProductListRes;
}
