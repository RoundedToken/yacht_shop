import { IWebSearchRes } from './../../../models/interfaces/RTKQuery/IWebSearch';

export interface ISearchListItem {
    product: IWebSearchRes;
    styles: {
        readonly [key: string]: string;
    };
}
