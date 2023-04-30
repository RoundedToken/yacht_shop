import { IStylesState } from './../models/interfaces/slices/IStylesState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IStylesState = {
    modalDisplay: 'none',
    dropdownDisplay: 'none',
};

export const stylesSlice = createSlice({
    name: 'styles',
    initialState,
    reducers: {
        switchModalDisplay(state) {
            state.modalDisplay = state.modalDisplay === 'none' ? 'block' : 'none';
        },
        switchDropdownDisplay(state) {
            state.dropdownDisplay = state.dropdownDisplay === 'none' ? 'block' : 'none';
        },
    },
});

export const { switchModalDisplay, switchDropdownDisplay } = stylesSlice.actions;

export default stylesSlice.reducer;
