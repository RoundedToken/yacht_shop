import { INavTreeItem } from './../RTKQuery/INavTree';
export interface INavState {
    categoryList: INavTreeItem[];
    brands: string[];
    product?: { id: number; parentId: number };
}
