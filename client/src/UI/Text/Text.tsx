import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IText } from './IText';
import { RootState } from '../../redux/store';
import styles from './Text.module.scss';

const Text: FC<IText> = ({ rus, eng, est, onClick, id }) => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    return (
        <div id={id} onClick={onClick} className={styles.Text}>
            {lang === 'rus' && rus}
            {lang === 'eng' && eng}
            {lang === 'est' && est}
        </div>
    );
};

export default Text;
