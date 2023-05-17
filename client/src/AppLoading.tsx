import React, { FC } from 'react';

export interface IAppLoading {
    className?: string;
}

const AppLoading: FC<IAppLoading> = ({ className }) => {
    return (
        <div className={`spinner ${className}`}>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default AppLoading;
