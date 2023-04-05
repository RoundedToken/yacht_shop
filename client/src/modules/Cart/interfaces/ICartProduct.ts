export interface ICartProduct {
    styles: {
        readonly [key: string]: string;
    };
    id: number;
    src: string;
    name: string;
    price: number;
}
