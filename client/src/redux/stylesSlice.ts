import { IStylesState } from './../models/interfaces/slices/IStylesState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IStylesState = {
    modalDisplay: 'none',
    dropdownDisplay: 'none',
    brandsDisplay: 'none',
    filterDisplay: 'none',
    sortingDisplay: 'none',
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
        switchBrandsDisplay(state) {
            state.brandsDisplay = state.brandsDisplay === 'none' ? 'block' : 'none';
            state.filterDisplay = 'none';
            state.sortingDisplay = 'none';
        },
        switchFilterDisplay(state) {
            state.filterDisplay = state.filterDisplay === 'none' ? 'block' : 'none';
            state.brandsDisplay = 'none';
            state.sortingDisplay = 'none';
        },
        switchSortingDisplay(state) {
            state.sortingDisplay = state.sortingDisplay === 'none' ? 'flex' : 'none';
            state.brandsDisplay = 'none';
            state.filterDisplay = 'none';
        },
    },
});

export const {
    switchModalDisplay,
    switchDropdownDisplay,
    switchBrandsDisplay,
    switchFilterDisplay,
    switchSortingDisplay,
} = stylesSlice.actions;

export default stylesSlice.reducer;
