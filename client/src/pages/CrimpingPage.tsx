import React, { useEffect } from 'react';
import CrimpingTicker from '../modules/Tickers/CrimpingTicker';

const CableCrimpingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <CrimpingTicker />
            CableCrimpingPage
        </div>
    );
};

export default CableCrimpingPage;
