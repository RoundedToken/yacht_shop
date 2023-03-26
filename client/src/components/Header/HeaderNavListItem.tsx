import React, { FC } from 'react';
import leftArrowImg from '../../assets/HeaderImg/leftArrow.png';

interface IHeaderNavListItem {
    children: React.ReactNode;
    styles: {
        readonly [key: string]: string;
    };
    onClick?: React.MouseEventHandler;
    src: string;
}

const HeaderNavListItem: FC<IHeaderNavListItem> = ({ children, styles, onClick, src }) => {
    return (
        <span className={styles.Header__Nav__List__Item} onClick={onClick}>
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
