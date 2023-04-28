import React, { useEffect, useRef, useState } from 'react';
import styles from './SearchModal.module.scss';
import closeImg from '../../assets/images/close.png';
import { useDispatch, useSelector } from 'react-redux';
import { switchSearchModalDisplay } from '../../redux/stylesSlice';
import { RootState } from '../../redux/store';
import Text from '../Text/Text';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';

const SearchModal = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();
    const searchDisplay = useSelector((state: RootState) => state.stylesSlice.searchModalDisplay);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

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
    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(routeConstants.SEARCH_ROUTE + `/${searchValue}`);
        document.body.style.overflow = 'auto';
        dispatch(switchSearchModalDisplay());
        setSearchValue('');
    };

    useEffect(() => {
        if (modalRef.current) modalRef.current.style.display = searchDisplay;
    }, [searchDisplay]);

    return (
        <div ref={modalRef} className={styles.modal}>
            <div className={styles.modalContentContainer}>
                <img onClick={closeOnClick} className={styles.modalClose} src={closeImg} alt="" />

                <form
                    ref={formRef}
                    className={styles.searchForm}
                    onSubmit={(e) => navigateOnSubmit(e)}
                >
                    <input
                        value={searchValue}
                        type="text"
                        minLength={4}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        required
                    />
                    <button type="submit">
                        <Text rus="Поиск" eng="Search" est="Otsing" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchModal;
