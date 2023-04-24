import React, { useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import closeImg from '../../assets/images/close.png';
import { useDispatch, useSelector } from 'react-redux';
import { switchSearchModalDisplay } from '../../redux/stylesSlice';
import { RootState } from '../../redux/store';

const Search = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const searchDisplay = useSelector((state: RootState) => state.stylesSlice.searchModalDisplay);

    window.onclick = function (e) {
        if (e.target === modalRef.current) {
            dispatch(switchSearchModalDisplay());
            document.body.style.overflow = 'auto';
        }
    };
    const closeOnClick = () => {
        dispatch(switchSearchModalDisplay());
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (modalRef.current) modalRef.current.style.display = searchDisplay;
    }, [searchDisplay]);

    return (
        <div ref={modalRef} className={styles.modal}>
            <div className={styles.modalContentContainer}>
                <img onClick={closeOnClick} className={styles.modalClose} src={closeImg} alt="" />
                Coming soon
            </div>
        </div>
    );
};

export default Search;
