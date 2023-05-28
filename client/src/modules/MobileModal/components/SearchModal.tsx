import React, { FC, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { RootState } from '../../../redux/store';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import { ISearchModal } from '../interfaces/ISearchModal';
import ModalHeader from './ModalHeader';

const SearchModal: FC<ISearchModal> = ({ styles }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const placeholder = { rus: 'Поиск...', eng: 'Search...', est: 'Otsing...' };
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const dispatch = useDispatch();

    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //@ts-ignore
        document.activeElement.blur();
        e.preventDefault();
        navigate(routeConstants.SEARCH_ROUTE + `/${searchValue}`);
        setSearchValue('');
        document.body.style.overflow = 'auto';
        dispatch(switchMobileModalDisplay());
    };
    const searchOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <div className={styles.content}>
            <ModalHeader styles={styles} title={<Text rus="Поиск" eng="Search" est="Otsing" />} />

            <form
                ref={formRef}
                className={styles.itemsContainer}
                onSubmit={(e) => navigateOnSubmit(e)}
            >
                <input
                    placeholder={placeholder[lang]}
                    name="search"
                    value={searchValue}
                    className={styles.searchInput}
                    type="text"
                    minLength={4}
                    onFocus={(e) => searchOnFocus(e)}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    required
                />
            </form>
        </div>
    );
};

export default SearchModal;
