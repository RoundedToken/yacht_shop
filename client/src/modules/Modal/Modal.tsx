import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import closeImg from '../../assets/images/close.png';
import { switchModalDisplay } from '../../redux/stylesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import OrderModal from './components/OrderModal';
import SearchModal from './components/SearchModal';
import PicModal from './components/PicModal';

const Modal = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const modalType = useSelector((state: RootState) => state.modalSlice.modalType);
    const modalDisplay = useSelector((state: RootState) => state.stylesSlice.modalDisplay);

    window.onclick = function (e) {
        if (e.target === modalRef.current) {
            dispatch(switchModalDisplay());
            document.body.style.overflow = 'auto';
        }
    };
    const closeOnClick = () => {
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (modalRef.current) modalRef.current.style.display = modalDisplay;
    }, [modalDisplay]);

    return (
        <div ref={modalRef} className={styles.modal}>
            <div className={styles.modalContentContainer}>
                <img onClick={closeOnClick} className={styles.modalClose} src={closeImg} alt="" />

                {modalType === 'order' && <OrderModal styles={styles} />}

                {modalType === 'search' && <SearchModal styles={styles} />}

                {modalType === 'pic' && <PicModal styles={styles} />}
            </div>
        </div>
    );
};

export default Modal;
