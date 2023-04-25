export interface IFavoritesItem {
    id: number;
    brand: string;
}

export interface IFavoritesState {
    favoritesList: IFavoritesItem[];
    update: boolean;
}
