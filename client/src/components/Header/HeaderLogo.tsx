import React, { FC } from 'react';
import ropeboxLogoImg from '../../assets/HeaderImg/ropeboxLogo.jpg';

interface IHeaderLogo {
    className: string;
    width: number;
    height: number;
}

const HeaderLogo: FC<IHeaderLogo> = ({ className, width, height }) => {
    return (
        <div className={className}>
            <img src={ropeboxLogoImg} alt="" width={width} height={height} />
        </div>
    );
};

export default HeaderLogo;
