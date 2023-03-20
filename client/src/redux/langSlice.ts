import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Lang = 'rus' | 'eng' | 'est';

export interface ILangState {
    lang: Lang;
}

const initialState: ILangState = {
    lang: 'rus',
};

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang(state, action: PayloadAction<Lang>) {
            state.lang = action.payload;
        },
    },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
