import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TLang } from '../../models/TLang';
import { setLang } from '../../redux/langSlice';
import { RootState } from '../../redux/store';
import { routeConstants } from '../../routes/constants';

const Header = () => {
    const navigate = useNavigate();
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const dispatch = useDispatch();

    const catalogOnClick = () => {
        navigate(routeConstants.CATEGORIES_ROUTE + '/0');
    };

    const mainOnClick = () => {
        navigate(routeConstants.MAIN_ROUTE);
    };

    const cableCrimpingOnClick = () => {
        navigate(routeConstants.CABLE_CRIMPING_ROUTE);
    };

    const cartOnClick = () => {
        navigate(routeConstants.CART_ROUTE);
    };

    const contactsOnClick = () => {
        navigate(routeConstants.CONTACTS_ROUTE);
    };

    const langOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLang(e.target.value as TLang));
    };

    return (
        <div>
            <button onClick={mainOnClick}>Main</button>
            <button onClick={catalogOnClick}>Catalog</button>
            <button onClick={cableCrimpingOnClick}>Cable Crimping</button>
            <button onClick={cartOnClick}>Cart</button>
            <button onClick={contactsOnClick}>Contacts</button>
            <select value={lang} onChange={langOnChange}>
                <option>rus</option>
                <option>eng</option>
                <option>est</option>
            </select>
        </div>
    );
};

export default Header;
