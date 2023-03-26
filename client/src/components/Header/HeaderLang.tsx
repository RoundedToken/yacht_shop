import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TLang } from '../../models/TLang';
import { setLang } from '../../redux/langSlice';
import { RootState } from '../../redux/store';
import translationImg from '../../assets/HeaderImg/translation.png';
import downArrowImg from '../../assets/HeaderImg/downArrow.png';
import upArrowImg from '../../assets/HeaderImg/upArrow.png';

interface IHeaderLang {
    styles: {
        readonly [key: string]: string;
    };
}

const HeaderLang: FC<IHeaderLang> = ({ styles }) => {
    const dispatch = useDispatch();
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    const langOptionOnClick = (lang: TLang) => {
        dispatch(setLang(lang));
    };

    return (
        <div className={styles.Header__Lang}>
            <img src={translationImg} alt="" width={32} height={32} />
            <div className={styles.Header__Lang__Select}>
                {lang.toUpperCase()}
                <div className={styles.Header__Lang__Options}>
                    <span
                        id={lang === 'rus' ? 'disabledLang' : undefined}
                        onClick={() => langOptionOnClick('rus')}
                        className={styles.Header__Lang__Option}
                    >
                        RUS
                    </span>
                    <span
                        id={lang === 'eng' ? 'disabledLang' : undefined}
                        onClick={() => langOptionOnClick('eng')}
                        className={styles.Header__Lang__Option}
                    >
                        ENG
                    </span>
                    <span
                        id={lang === 'est' ? 'disabledLang' : undefined}
                        onClick={() => langOptionOnClick('est')}
                        className={styles.Header__Lang__Option}
                    >
                        EST
                    </span>
                </div>
            </div>
            <img
                className={styles.Header__Up__Arrow}
                src={upArrowImg}
                alt=""
                width={25}
                height={25}
            />
            <img
                className={styles.Header__Down__Arrow}
                src={downArrowImg}
                alt=""
                width={25}
                height={25}
            />
        </div>
    );
};

export default HeaderLang;
