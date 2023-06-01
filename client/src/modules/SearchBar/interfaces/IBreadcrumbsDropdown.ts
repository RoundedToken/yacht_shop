import { INavTreeItem } from '../../../models/interfaces/RTKQuery/INavTree';

export interface IBreadcrumbsDropdown {
    styles: {
        readonly [key: string]: string;
    };
    children: INavTreeItem[];
}
