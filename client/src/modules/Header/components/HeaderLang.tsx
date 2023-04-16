import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import translationImg from '../../../assets/images/translation.png';
import downArrowImg from '../../../assets/images/downArrow.png';
import upArrowImg from '../../../assets/images/upArrow.png';
import { IHeaderLang } from '../interfaces/IHeaderLang';
import LangOption from './LangOption';

const HeaderLang: FC<IHeaderLang> = ({ styles }) => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    return (
        <div className={styles.headerLang}>
            <img src={translationImg} alt="" />

            <div className={styles.langSelect}>
                {lang.toUpperCase()}

                <div className={styles.langOptions}>
                    <LangOption styles={styles} lang="rus" />

                    <LangOption styles={styles} lang="eng" />

                    <LangOption styles={styles} lang="est" />
                </div>
            </div>

            <img className={styles.langUpArrow} src={upArrowImg} alt="" />

            <img className={styles.langDownArrow} src={downArrowImg} alt="" />
        </div>
    );
};

export default HeaderLang;
