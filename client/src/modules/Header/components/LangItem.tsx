import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../../redux/langSlice';
import { RootState } from '../../../redux/store';
import { ILangItem } from '../interfaces/ILangItem';

const LangItem: FC<ILangItem> = ({ styles, lang }) => {
    const isActive = useSelector((state: RootState) => state.langSlice.lang) === lang;
    const dispatch = useDispatch();

    const setLangOnClick = () => {
        dispatch(setLang(lang));
    };

    return (
        <div
            className={`${styles.lang__item} ${isActive && styles.lang__active}`}
            onClick={setLangOnClick}
        >
            {lang.toUpperCase()}
        </div>
    );
};

export default LangItem;
