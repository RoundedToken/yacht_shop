export interface ICartProduct {
    id: number;
    count: number;
    price: number;
    brand: string;
}

export interface ICartState {
    productList: ICartProduct[];
    productListCopy: ICartProduct[];
    response?: string;
    responseIsLoading: boolean;
    update: boolean;
}
