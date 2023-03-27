import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import leftArrowImg from '../../assets/HeaderImg/leftArrow.png';

interface IHeaderNavListItem {
    children: React.ReactNode;
    styles: {
        readonly [key: string]: string;
    };
    src: string;
    route: string;
    param?: string;
}

const HeaderNavListItem: FC<IHeaderNavListItem> = ({ children, styles, src, route, param }) => {
    const isActive = '/' + useLocation().pathname.split('/')[1] === route ? true : false;
    const navigate = useNavigate();

    const itemOnClick = () => {
        navigate(route + (param ?? ''));
    };

    return (
        <span
            className={`${isActive && styles.Active} ${styles.Header__Nav__List__Item}`}
            onClick={itemOnClick}
        >
            <img src={src} alt="" width={32} height={32} />
            {children}
            <img
                className={styles.Header__Left__Arrow}
                src={leftArrowImg}
                alt=""
                width={25}
                height={25}
            />
        </span>
    );
};

export default HeaderNavListItem;
