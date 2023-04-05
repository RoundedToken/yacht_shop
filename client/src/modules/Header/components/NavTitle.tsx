import React from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';

const NavTitle = () => {
    return (
        <Link to={routeConstants.MAIN_ROUTE} className="navBarTitle">
            RopeBox
        </Link>
    );
};

export default NavTitle;
