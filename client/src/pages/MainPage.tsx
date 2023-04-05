import React, { useEffect } from 'react';
import MainTicker from '../modules/Tickers/MainTicker';

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <MainTicker />
            <div>MainPage</div>
        </div>
    );
};

export default MainPage;
