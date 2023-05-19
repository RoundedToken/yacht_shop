import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { switchMobileModalDisplay } from '../../redux/stylesSlice';
import BreadcrumbsModal from './components/BreadcrumbsModal';
import LangModal from './components/LangModal';
import SearchModal from './components/SearchModal';
import styles from './MobileModal.module.scss';

const MobileModal = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const modalDisplay = useSelector((state: RootState) => state.stylesSlice.mobileModalDisplay);
    const modalType = useSelector((state: RootState) => state.modalSlice.mobileModalType);

    window.onclick = function (e) {
        if (e.target === modalRef.current) {
            dispatch(switchMobileModalDisplay());
            document.body.style.overflow = 'auto';
        }
    };

    const closeOnClick = () => {
        dispatch(switchMobileModalDisplay());
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (modalRef.current) modalRef.current.style.display = modalDisplay;
    }, [modalDisplay]);

    if (modalDisplay === 'none') return null;

    return (
        <div ref={modalRef} className={styles.modal}>
            <div className={styles.modalContentContainer}>
                <div onClick={closeOnClick} className={styles.modalClose}>
                    &times;
                </div>

                {modalType === 'lang' && <LangModal styles={styles} />}

                {modalType === 'search' && <SearchModal styles={styles} />}

                {modalType === 'breadcrumbs' && <BreadcrumbsModal styles={styles} />}
            </div>
        </div>
    );
};

export default MobileModal;
