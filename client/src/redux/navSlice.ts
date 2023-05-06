import { INavTreeItem } from './../models/interfaces/RTKQuery/INavTree';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INavState } from '../models/interfaces/slices/INavState';

const initialState: INavState = {
    categoryList: [],
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        pushToCategoryList(state, action: PayloadAction<INavTreeItem>) {
            state.categoryList.push(action.payload);
        },
        clearCategoryList(state) {
            state.categoryList = [];
        },

        setProduct(state, action: PayloadAction<{ id: number; parentId: number }>) {
            state.product = action.payload;
        },
    },
});

export const { pushToCategoryList, clearCategoryList } = navSlice.actions;

export default navSlice.reducer;
