import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Text.module.scss';

interface IText {
    rus: string;
    eng: string;
    est: string;
}

const Text: FC<IText> = ({ rus, eng, est }) => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    return (
        <div className={styles.Text}>
            {lang === 'rus' && rus}
            {lang === 'eng' && eng}
            {lang === 'est' && est}
        </div>
    );
};

export default Text;
