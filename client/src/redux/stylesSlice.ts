import { IStylesState } from './../models/interfaces/slices/IStylesState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IStylesState = {
    orderModalDisplay: 'none',
};

export const stylesSlice = createSlice({
    name: 'styles',
    initialState,
    reducers: {
        switchOrderModalDisplay(state) {
            state.orderModalDisplay = state.orderModalDisplay === 'none' ? 'block' : 'none';
        },
    },
});

export const { switchOrderModalDisplay } = stylesSlice.actions;

export default stylesSlice.reducer;
