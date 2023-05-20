import { TModal } from './../models/types/TModal';
import { IModalState } from './../models/interfaces/slices/IModalState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMobileModal } from '../models/types/TMobileModal';

const initialState: IModalState = {
    modalType: 'null',
    picSrc: [],
    mobileModalType: null,
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
        setMobileModalType(state, action: PayloadAction<TMobileModal>) {
            state.mobileModalType = action.payload;
        },
    },
});

export const { setModalType, setPicSrc, setMobileModalType } = modalSlice.actions;

export default modalSlice.reducer;
