import { IFavoritesItem, IFavoritesState } from '../models/interfaces/slices/IFavoritesState';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IFavoritesState = {
    favoritesList: localStorage.favoritesList ? JSON.parse(localStorage.favoritesList) : [],
    update: localStorage.favoritesUpdate ? JSON.parse(localStorage.favoritesUpdate) : false,
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoritesItem(state, action: PayloadAction<IFavoritesItem>) {
            const item = action.payload;
            item.brand = item.brand.toLowerCase();
            state.favoritesList.push(item);
            localStorage.favoritesList = JSON.stringify(state.favoritesList);
        },
        removeFavoritesItem(state, action: PayloadAction<IFavoritesItem>) {
            state.favoritesList.splice(
                state.favoritesList.findIndex((item) => item.id === action.payload.id),
                1
            );
            localStorage.favoritesList = JSON.stringify(state.favoritesList);
        },
        setFavoritesFromStorage(state) {
            if (localStorage.favoritesList) {
                state.favoritesList = JSON.parse(localStorage.favoritesList);
                state.update = localStorage.favoritesUpdate === 'true' ? true : false;
            }
        },
        toTrueTheUpdate(state) {
            state.update = true;
            localStorage.favoritesUpdate = state.update;
        },
        toFalseTheUpdate(state) {
            state.update = false;
            localStorage.favoritesUpdate = state.update;
        },
    },
});

export const {
    addFavoritesItem,
    removeFavoritesItem,
    setFavoritesFromStorage,
    toTrueTheUpdate,
    toFalseTheUpdate,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
