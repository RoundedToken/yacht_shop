import React, { FC } from 'react';
import { ILang } from '../interfaces/ILang';
import LangItem from './LangItem';

const Lang: FC<ILang> = ({ styles }) => {
    return (
        <div className={styles.lang}>
            <LangItem styles={styles} lang="est" />

            <LangItem styles={styles} lang="eng" />

            <LangItem styles={styles} lang="rus" />
        </div>
    );
};

export default Lang;
