export interface IHeaderNavListItem {
    children: React.ReactNode;
    styles: {
        readonly [key: string]: string;
    };
    src: string;
    route: string;
}
