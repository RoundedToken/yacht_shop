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
    listMode: 'grid',
    productListFilters: {
        inStock: false,
        notInStock: false,
        inCart: false,
        notInCart: false,
        inFavorites: false,
        notInFavorites: false,
    },
    cartListFilters: {
        inFavorites: false,
        notInFavorites: false,
    },
    favoritesSorting: { sortKey: 'name', sortType: 'ASC' },
    cartSorting: { sortKey: 'name', sortType: 'ASC' },
    categorySorting: { sortKey: 'name', sortType: 'ASC' },
    productListSorting: { sortKey: 'name', sortType: 'ASC' },
};

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        setListMode(state, action: PayloadAction<TListMode>) {
            state.listMode = action.payload;
        },
        setProductListFilter(
            state,
            action: PayloadAction<{ filter: TProductListFilter; status: boolean }>
        ) {
            state.productListFilters[action.payload.filter] = action.payload.status;
        },
        clearProductListFilters(state) {
            state.productListFilters = {
                inStock: false,
                notInStock: false,
                inCart: false,
                notInCart: false,
                inFavorites: false,
                notInFavorites: false,
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
                inFavorites: false,
                notInFavorites: false,
            };
        },
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
    },
});

export const {
    setListMode,
    setProductListFilter,
    clearProductListFilters,
    setCartListFilter,
    clearCartListFilters,
    setCategorySorting,
    setCartSorting,
    setProductListSorting,
    setFavoritesSorting,
    clearSorting,
} = sideBarSlice.actions;

export default sideBarSlice.reducer;
