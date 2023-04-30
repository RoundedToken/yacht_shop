import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { switchModalDisplay } from '../../../redux/stylesSlice';
import Text from '../../../UI/Text/Text';
import { ISearchModal } from '../interfaces/ISearchModal';

const SearchModal: FC<ISearchModal> = ({ styles }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(routeConstants.SEARCH_ROUTE + `/${searchValue}`);
        document.body.style.overflow = 'auto';
        dispatch(switchModalDisplay());
        setSearchValue('');
    };

    return (
        <form ref={formRef} className={styles.searchForm} onSubmit={(e) => navigateOnSubmit(e)}>
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
    );
};

export default SearchModal;
