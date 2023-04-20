import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RefreshPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(-1);
    }, [navigate]);

    return <div>RefreshPage</div>;
};

export default RefreshPage;
