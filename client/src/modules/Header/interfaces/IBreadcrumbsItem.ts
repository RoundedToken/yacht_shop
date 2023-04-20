export interface IBreadcrumbsItem {
    styles: {
        readonly [key: string]: string;
    };
    id: number;
    name: string;
    hasChildren: boolean;
}
