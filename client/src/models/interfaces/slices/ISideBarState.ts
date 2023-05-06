import { TSort } from './../../types/TSort';
import { TProductListSorting } from './../../types/TProductListSorting';
import { TCategorySorting } from './../../types/TCategorySorting';
import { TCartSorting } from './../../types/TCartSorting';
import { TFavoritesSorting } from './../../types/TFavoritesSorting';
import { TListMode } from './../../types/TListMode';

export interface IProductListFilters {
    inStock: boolean;
    notInStock: boolean;
    inCart: boolean;
    notInCart: boolean;
    inFavorites: boolean;
    notInFavorites: boolean;
}

export interface ICartListFilters {
    inFavorites: boolean;
    notInFavorites: boolean;
}

export interface ICartSorting {
    sortKey: TCartSorting;
    sortType: TSort;
}

export interface IFavoritesSorting {
    sortKey: TFavoritesSorting;
    sortType: TSort;
}

export interface ICategorySorting {
    sortKey: TCategorySorting;
    sortType: TSort;
}

export interface IProductListSorting {
    sortKey: TProductListSorting;
    sortType: TSort;
}

export interface ISideBarState {
    listMode: TListMode;
    productListFilters: IProductListFilters;
    cartListFilters: ICartListFilters;
    favoritesSorting: IFavoritesSorting;
    cartSorting: ICartSorting;
    categorySorting: ICategorySorting;
    productListSorting: IProductListSorting;
    brands: string[];
    cartBrands: string[];
    favoritesBrands: string[];
}
