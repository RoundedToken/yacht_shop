import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface INavState {
    categoryId: number;
    hasChildren: boolean;
}

const initialState: INavState = {
    categoryId: 0,
    hasChildren: true,
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
    },
});

export const { setNavId, setNavHasChildren } = navSlice.actions;

export default navSlice.reducer;
