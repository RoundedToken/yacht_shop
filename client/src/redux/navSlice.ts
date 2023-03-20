import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface INavState {
    categoryId: number;
}

const initialState: INavState = {
    categoryId: 0,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNavId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
    },
});

export const { setNavId } = navSlice.actions;

export default navSlice.reducer;
