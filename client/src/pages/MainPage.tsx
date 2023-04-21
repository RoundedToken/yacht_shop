import React, { useEffect } from 'react';

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div>MainPage</div>
        </div>
    );
};

export default MainPage;
