import { IWebSearchRes } from './../../../models/interfaces/RTKQuery/IWebSearch';

export interface ISearchProductCart {
    styles: {
        readonly [key: string]: string;
    };
    product: IWebSearchRes;
}
