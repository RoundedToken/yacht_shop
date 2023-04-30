import { TListMode } from './../models/types/TListMode';
import { ISideBarState } from './../models/interfaces/slices/ISideBarState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ISideBarState = {
    listMode: 'grid',
};

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        setListMode(state, action: PayloadAction<TListMode>) {
            state.listMode = action.payload;
        },
    },
});

export const { setListMode } = sideBarSlice.actions;

export default sideBarSlice.reducer;
