import React from 'react';
import Contacts from '../components/Contacts/Contacts';
import ContactsTicker from '../components/Tickers/ContactsTicker';

const ContactsPage = () => {
    return (
        <div>
            <ContactsTicker />
            <Contacts />
        </div>
    );
};

export default ContactsPage;
