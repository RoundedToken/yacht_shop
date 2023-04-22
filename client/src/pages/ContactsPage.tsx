import React from 'react';
import Contacts from '../modules/Contacts/Contacts';
import styles from './pages.module.scss';

const ContactsPage = () => {
    return (
        <div className={styles.container}>
            <Contacts />
        </div>
    );
};

export default ContactsPage;
