import React, { useEffect } from 'react';
import Main from '../modules/Main/Main';
import { useMatomo } from '@datapunt/matomo-tracker-react';

const MainPage = () => {
    const { trackPageView } = useMatomo();
    // Track page view
    useEffect(() => {
        //@ts-ignore
        trackPageView();
    }, []);
    return (
        <>
            <Main />
        </>
    );
};

export default MainPage;
