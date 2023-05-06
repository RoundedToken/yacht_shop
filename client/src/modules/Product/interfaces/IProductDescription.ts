import { INavProductRes } from './../../../models/interfaces/RTKQuery/INavProduct';

export interface IProductDescription {
    styles: {
        readonly [key: string]: string;
    };
    product: INavProductRes;
}
