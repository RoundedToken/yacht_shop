import React, { useEffect } from 'react';
import Contacts from '../modules/Contacts/Contacts';
import ContactsTicker from '../modules/Tickers/ContactsTicker';

const ContactsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <ContactsTicker />
            <Contacts />
        </div>
    );
};

export default ContactsPage;
