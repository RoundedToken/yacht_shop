import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INavState } from '../models/interfaces/slices/INavState';

const initialState: INavState = {
    categoryId: 0,
    hasChildren: true,
    brand: 'notSelected',
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNavId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },

        setNavHasChildren(state, action: PayloadAction<boolean>) {
            state.hasChildren = action.payload;
        },

        setBrand(state, action: PayloadAction<string>) {
            state.brand = action.payload;
        },
    },
});

export const { setNavId, setNavHasChildren, setBrand } = navSlice.actions;

export default navSlice.reducer;
