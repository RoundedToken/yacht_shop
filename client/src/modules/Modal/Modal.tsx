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
import NavModal from './components/NavModal';
import { setModalType } from '../../redux/modalSlice';

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
        if (modalDisplay === 'none') dispatch(setModalType('null'));
    }, [modalDisplay, dispatch]);

    useEffect(() => {
        const onResize = () => {
            if (
                (window.innerWidth <= 1000 || window.innerHeight <= 800) &&
                modalRef.current &&
                modalType === 'nav'
            ) {
                modalRef.current.style.display = 'none';
            }
        };

        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalRef.current]);

    return (
        <div ref={modalRef} className={styles.modal}>
            <div
                style={modalType === 'nav' ? { display: 'none' } : {}}
                className={
                    modalType === 'order'
                        ? styles.orderModalContainer
                        : styles.modalContentContainer
                }
            >
                <div
                    style={modalType === 'order' ? { display: 'none' } : {}}
                    className={styles.modalClose}
                    onClick={closeOnClick}
                >
                    &times;
                </div>

                {modalType === 'order' && <OrderModal styles={styles} />}

                {modalType === 'pic' && <PicModal styles={styles} />}
            </div>

            <div style={modalType === 'nav' ? {} : { display: 'none' }}>
                <NavModal />
            </div>
        </div>
    );
};

export default Modal;
