import { INavTreeItem } from './../../../models/interfaces/RTKQuery/INavTree';

export interface IDropdownItem {
    children?: React.ReactNode;
    treeItem: INavTreeItem;
}
