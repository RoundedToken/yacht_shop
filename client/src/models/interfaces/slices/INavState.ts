import { Set } from 'typescript';
import { INavTreeItem } from './../RTKQuery/INavTree';
export interface INavState {
    categoryList: INavTreeItem[];
    brands: string[];
}
