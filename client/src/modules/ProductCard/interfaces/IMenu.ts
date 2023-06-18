export interface IMenu {
    styles: {
        readonly [key: string]: string;
    };
    id: number;
    brand: string;
    price: number;
    isDecimals: boolean;
}
