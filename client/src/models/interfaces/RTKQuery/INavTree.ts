export interface ITreeItemRoute {
    id: number;
    name: string;
    hasChildren?: boolean;
}

export interface INavTreeItem {
    id: number;
    parentId: number;
    routes: ITreeItemRoute[];
    brands: string[];
    name: string;
    children?: INavTreeItem[];
    src: string;
    productCount: number;
}
