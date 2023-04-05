export interface ICartProduct {
    id: number;
    count: number;
    price: number;
}

export interface ICartState {
    productList: ICartProduct[];
    productListCopy: ICartProduct[];
    response?: string;
    responseIsLoading: boolean;
}
