import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import { switchModalDisplay } from '../../redux/stylesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import OrderModal from './components/OrderModal';
import PicModal from './components/PicModal';
import { deleteResponse } from '../../redux/cartSlice';
import { routeConstants } from '../../models/enums/EConstants';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const modalType = useSelector((state: RootState) => state.modalSlice.modalType);
    const modalDisplay = useSelector((state: RootState) => state.stylesSlice.modalDisplay);
    const response = useSelector((state: RootState) => state.cartSlice.response);
    const navigate = useNavigate();

    window.onclick = function (e) {
        if (e.target === modalRef.current) {
            if (response) {
                dispatch(deleteResponse());
                navigate(routeConstants.MAIN_ROUTE);
            }
            dispatch(switchModalDisplay());
            document.body.style.overflow = 'auto';
        }
    };
    window.onkeydown = function (e) {
        if (e.key === 'Escape' && modalDisplay === 'block') {
            if (response) {
                dispatch(deleteResponse());
                navigate(routeConstants.MAIN_ROUTE);
            }
            dispatch(switchModalDisplay());
            document.body.style.overflow = 'auto';
        }
    };
    const closeOnClick = () => {
        if (response) {
            dispatch(deleteResponse());
            navigate(routeConstants.MAIN_ROUTE);
        }
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (modalRef.current) modalRef.current.style.display = modalDisplay;
    }, [modalDisplay]);

    if (modalDisplay === 'none') return null;

    return (
        <div ref={modalRef} className={styles.modal}>
            <div className={styles.modalContentContainer}>
                <div className={styles.modalClose} onClick={closeOnClick}>
                    &times;
                </div>

                {modalType === 'order' && <OrderModal styles={styles} />}

                {modalType === 'pic' && <PicModal styles={styles} />}
            </div>
        </div>
    );
};

export default Modal;
