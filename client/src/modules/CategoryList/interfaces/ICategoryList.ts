import { INavTreeItem } from '../../../models/interfaces/RTKQuery/INavTree';

export interface ICategoryList {
    categoryChildren: INavTreeItem[];
    styles: {
        readonly [key: string]: string;
    };
}
