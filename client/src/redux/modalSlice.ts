import { TModal } from './../models/types/TModal';
import { IModalState } from './../models/interfaces/slices/IModalState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IModalState = {
    modalType: 'pic',
    picSrc: [],
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalType(state, action: PayloadAction<TModal>) {
            state.modalType = action.payload;
        },
        setPicSrc(state, action: PayloadAction<string[]>) {
            state.picSrc = action.payload;
        },
    },
});

export const { setModalType, setPicSrc } = modalSlice.actions;

export default modalSlice.reducer;
