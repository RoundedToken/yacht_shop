export interface ICategoryItem {
    id: number;
    parentId: number;
    children?: React.ReactNode;
    hasChildren?: boolean;
    src: string;
    styles: {
        readonly [key: string]: string;
    };
}
