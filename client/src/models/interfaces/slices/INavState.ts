import { INavTreeItem } from './../RTKQuery/INavTree';
export interface INavState {
    categoryList: INavTreeItem[];
    product?: { id: number; parentId: number };
}
