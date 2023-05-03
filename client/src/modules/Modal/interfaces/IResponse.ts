import { IWebOrderRes } from '../../../models/interfaces/RTKQuery/IWebOrder';

export interface IResponse {
    styles: {
        readonly [key: string]: string;
    };
    response: IWebOrderRes;
}
