export interface IFavoritesItem {
    id: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    src: string;
    styles: {
        readonly [key: string]: string;
    };
}
