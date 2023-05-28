import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TLang } from '../../../models/types/TLang';
import { setLang } from '../../../redux/langSlice';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import { ILangModal } from '../interfaces/ILangModal';
import ModalHeader from './ModalHeader';

const LangModal: FC<ILangModal> = ({ styles }) => {
    const dispatch = useDispatch();

    const changeLang = (lang: TLang) => {
        dispatch(setLang(lang));
        dispatch(switchMobileModalDisplay());
        document.body.style.overflow = 'auto';
    };

    return (
        <div className={styles.content}>
            <ModalHeader
                styles={styles}
                title={<Text rus="Выбор языка" eng="Language selection" est="Keele valik" />}
            />

            <div className={styles.itemsContainer}>
                <div onClick={() => changeLang('est')} className={styles.item}>
                    Eesti
                </div>

                <div onClick={() => changeLang('eng')} className={styles.item}>
                    English
                </div>

                <div onClick={() => changeLang('rus')} className={styles.item}>
                    Русский
                </div>
            </div>
        </div>
    );
};

export default LangModal;
