import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TLang } from '../../../models/types/TLang';
import { setLang } from '../../../redux/langSlice';
import { RootState } from '../../../redux/store';
import { ILangOption } from '../interfaces/ILangOption';

const LangOption: FC<ILangOption> = ({ styles, lang }) => {
    const dispatch = useDispatch();
    const langState = useSelector((state: RootState) => state.langSlice.lang);

    const langOptionOnClick = (lang: TLang) => {
        dispatch(setLang(lang));
    };

    return (
        <span
            id={lang === langState ? 'disabledLang' : undefined}
            onClick={() => langOptionOnClick(lang)}
            className={styles.langOption}
        >
            {lang.toUpperCase()}
        </span>
    );
};

export default LangOption;
