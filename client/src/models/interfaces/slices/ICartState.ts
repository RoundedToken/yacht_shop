import { IWebOrderRes } from '../RTKQuery/IWebOrder';

export interface ICartProduct {
    id: number;
    count: number;
    price: number;
    brand: string;
}

export interface ICartState {
    productList: ICartProduct[];
    productListCopy: ICartProduct[];
    response?: IWebOrderRes;
    responseIsLoading: boolean;
    update: boolean;
}
