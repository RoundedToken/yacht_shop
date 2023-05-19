import { TFavoritesFilter } from './../models/types/TFavoritesFilter';
import { TCartListFilter } from './../models/types/TCartListFilter';
import { TProductListFilter } from './../models/types/TProductListFilter';
import { TListMode } from './../models/types/TListMode';
import {
    ICartSorting,
    ICategorySorting,
    IFavoritesSorting,
    ISideBarState,
    IProductListSorting,
} from './../models/interfaces/slices/ISideBarState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ISideBarState = {
    //LIST_MODE
    listMode: 'grid',

    //FILTER
    productListFilters: {
        inStock: false,
    },
    cartListFilters: {
        inStock: false,
    },
    favoritesFilters: {
        inStock: false,
    },

    //SORTING
    favoritesSorting: { sortKey: 'name', sortType: 'ASC' },
    cartSorting: { sortKey: 'name', sortType: 'ASC' },
    categorySorting: { sortKey: 'name', sortType: 'ASC' },
    productListSorting: { sortKey: 'name', sortType: 'ASC' },

    //BRANDS
    brands: [],
    cartBrands: [],
    favoritesBrands: [],
};

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        //LIST_MODE
        setListMode(state, action: PayloadAction<TListMode>) {
            state.listMode = action.payload;
        },

        //FILTER
        setProductListFilter(
            state,
            action: PayloadAction<{ filter: TProductListFilter; status: boolean }>
        ) {
            state.productListFilters[action.payload.filter] = action.payload.status;
        },
        clearProductListFilters(state) {
            state.productListFilters = {
                inStock: false,
            };
        },
        setCartListFilter(
            state,
            action: PayloadAction<{ filter: TCartListFilter; status: boolean }>
        ) {
            state.cartListFilters[action.payload.filter] = action.payload.status;
        },
        clearCartListFilters(state) {
            state.cartListFilters = {
                inStock: false,
            };
        },
        setFavoritesFilter(
            state,
            action: PayloadAction<{ filter: TFavoritesFilter; status: boolean }>
        ) {
            state.favoritesFilters[action.payload.filter] = action.payload.status;
        },
        clearFavoritesFilters(state) {
            state.favoritesFilters = {
                inStock: false,
            };
        },

        //SORTING
        setCategorySorting(state, action: PayloadAction<ICategorySorting>) {
            state.categorySorting = action.payload;
        },
        setFavoritesSorting(state, action: PayloadAction<IFavoritesSorting>) {
            state.favoritesSorting = action.payload;
        },
        setCartSorting(state, action: PayloadAction<ICartSorting>) {
            state.cartSorting = action.payload;
        },
        setProductListSorting(state, action: PayloadAction<IProductListSorting>) {
            state.productListSorting = action.payload;
        },
        clearSorting(state) {
            state.favoritesSorting = { sortKey: 'name', sortType: 'ASC' };
            state.cartSorting = { sortKey: 'name', sortType: 'ASC' };
            state.categorySorting = { sortKey: 'name', sortType: 'ASC' };
            state.productListSorting = { sortKey: 'name', sortType: 'ASC' };
        },

        //BRANDS
        addBrand(state, action: PayloadAction<string>) {
            state.brands.push(action.payload);
        },
        removeBrand(state, action: PayloadAction<string>) {
            state.brands.splice(state.brands.indexOf(action.payload), 1);
        },
        clearBrands(state) {
            state.brands = [];
        },
        addCartBrand(state, action: PayloadAction<string>) {
            state.cartBrands.push(action.payload);
        },
        removeCartBrand(state, action: PayloadAction<string>) {
            state.cartBrands.splice(state.brands.indexOf(action.payload), 1);
        },
        clearCartBrands(state) {
            state.cartBrands = [];
        },
        addFavoritesBrand(state, action: PayloadAction<string>) {
            state.favoritesBrands.push(action.payload);
        },
        removeFavoritesBrand(state, action: PayloadAction<string>) {
            state.favoritesBrands.splice(state.brands.indexOf(action.payload), 1);
        },
        clearFavoritesBrands(state) {
            state.favoritesBrands = [];
        },
    },
});

export const {
    setListMode,
    setProductListFilter,
    clearProductListFilters,
    setCartListFilter,
    clearCartListFilters,
    setFavoritesFilter,
    clearFavoritesFilters,
    setCategorySorting,
    setCartSorting,
    setProductListSorting,
    setFavoritesSorting,
    clearSorting,
    addBrand,
    removeBrand,
    clearBrands,
    addCartBrand,
    removeCartBrand,
    clearCartBrands,
    addFavoritesBrand,
    removeFavoritesBrand,
    clearFavoritesBrands,
} = sideBarSlice.actions;

export default sideBarSlice.reducer;
