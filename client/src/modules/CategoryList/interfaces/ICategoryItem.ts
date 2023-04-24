export interface ICategoryItem {
    id: number;
    parentId: number;
    children?: React.ReactNode;
    hasChildren?: boolean;
    styles: {
        readonly [key: string]: string;
    };
}
