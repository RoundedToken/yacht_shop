export interface IProductName {
    styles: {
        readonly [key: string]: string;
    };
    price: number;
    id: number;
    brand: string;
    isDecimals: boolean;
}
