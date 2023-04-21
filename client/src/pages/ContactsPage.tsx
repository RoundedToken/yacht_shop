import React, { useEffect } from 'react';
import Contacts from '../modules/Contacts/Contacts';

const ContactsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Contacts />
        </div>
    );
};

export default ContactsPage;
