export interface INavBarItem {
    className: string;
    src: string;
    route: string;
    children: React.ReactNode;
    switcher?: React.ReactNode;
    styles: {
        readonly [key: string]: string;
    };
}
