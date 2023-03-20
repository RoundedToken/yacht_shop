import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../routes/constants';

const Header = () => {
    const navigate = useNavigate();

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

    return (
        <div>
            <button onClick={mainOnClick}>Main</button>
            <button onClick={catalogOnClick}>Catalog</button>
            <button onClick={cableCrimpingOnClick}>Cable Crimping</button>
            <button onClick={cartOnClick}>Cart</button>
            <button onClick={contactsOnClick}>Contacts</button>
        </div>
    );
};

export default Header;
