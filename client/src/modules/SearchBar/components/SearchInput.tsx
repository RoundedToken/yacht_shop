import React, { FC, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import lifebuoyImg from '../../../assets/images/lifebuoy.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import { clearBrands } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import { ISearchInput } from '../interfaces/ISearchInput';

const SearchInput: FC<ISearchInput> = ({ styles }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const placeholder = { rus: 'Поиск...', eng: 'Search...', est: 'Otsing...' };
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const dispatch = useDispatch();

    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        document.activeElement.blur();
        navigate(routeConstants.SEARCH_ROUTE + `/${searchValue}`);
        dispatch(clearBrands());
    };
    const searchOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <form
            ref={formRef}
            className={styles.searchContainer}
            onSubmit={(e) => navigateOnSubmit(e)}
        >
            <input
                placeholder={placeholder[lang]}
                name="search"
                autoComplete="on"
                value={searchValue}
                className={styles.searchInput}
                type="text"
                minLength={3}
                onFocus={(e) => searchOnFocus(e)}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                required
            />

            <input className={styles.submit} type="image" src={lifebuoyImg} alt="" />
        </form>
    );
};

export default SearchInput;
