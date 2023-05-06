export interface IProductDetail {
    styles: {
        readonly [key: string]: string;
    };
    code: string;
    inStock: boolean;
    inStockCount: number;
}
