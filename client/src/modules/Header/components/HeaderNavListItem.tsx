import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IHeaderNavListItem } from '../interfaces/IHeaderNavListItem';

const HeaderNavListItem: FC<IHeaderNavListItem> = ({ children, styles, src, route }) => {
    return (
        <Link className={styles.navItem} to={route}>
            <img src={src} alt="" />
            {children}
        </Link>
    );
};

export default HeaderNavListItem;
