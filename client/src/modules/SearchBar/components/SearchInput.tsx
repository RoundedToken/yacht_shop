import React, { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import lifebuoyImg from '../../../assets/images/lifebuoy.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import { RootState } from '../../../redux/store';
import { ISearchInput } from '../interfaces/ISearchInput';

const SearchInput: FC<ISearchInput> = ({ styles }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const placeholder = { rus: 'Поиск...', eng: 'Search...', est: 'Otsing...' };
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //@ts-ignore
        document.activeElement.blur();
        e.preventDefault();
        navigate(routeConstants.SEARCH_ROUTE + `/${searchValue}`);
        setSearchValue('');
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

            <img src={lifebuoyImg} alt="" />
        </form>
    );
};

export default SearchInput;
