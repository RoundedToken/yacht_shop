import { INavTreeItem } from './../../../models/interfaces/RTKQuery/INavTree';

export interface IDropdownItem {
    children?: React.ReactNode;
    treeItem: INavTreeItem;
    level: number;
    styles: {
        readonly [key: string]: string;
    };
}
