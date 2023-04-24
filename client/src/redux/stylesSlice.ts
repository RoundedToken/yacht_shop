import { IStylesState } from './../models/interfaces/slices/IStylesState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IStylesState = {
    orderModalDisplay: 'none',
    dropdownDisplay: 'none',
    searchModalDisplay: 'none',
};

export const stylesSlice = createSlice({
    name: 'styles',
    initialState,
    reducers: {
        switchOrderModalDisplay(state) {
            state.orderModalDisplay = state.orderModalDisplay === 'none' ? 'block' : 'none';
        },
        switchDropdownDisplay(state) {
            state.dropdownDisplay = state.dropdownDisplay === 'none' ? 'block' : 'none';
        },
        switchSearchModalDisplay(state) {
            state.searchModalDisplay = state.searchModalDisplay === 'none' ? 'block' : 'none';
        },
    },
});

export const { switchOrderModalDisplay, switchDropdownDisplay, switchSearchModalDisplay } =
    stylesSlice.actions;

export default stylesSlice.reducer;
