import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice';

export interface IModalHeader {
    styles: {
        readonly [key: string]: string;
    };
    title: React.ReactNode;
}

const ModalHeader: FC<IModalHeader> = ({ styles, title }) => {
    const dispatch = useDispatch();

    const closeOnClick = () => {
        dispatch(switchMobileModalDisplay());
        document.body.style.overflow = 'auto';
    };

    return (
        <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>{title}</div>

            <div onClick={closeOnClick} className={styles.modalClose}>
                &times;
            </div>
        </div>
    );
};

export default ModalHeader;
