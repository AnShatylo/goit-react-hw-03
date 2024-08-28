import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../../contacts.json';

import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState('');

  const contactFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const removeContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div className={css.appContainer}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={contactFilter} onRemove={removeContact} />
    </div>
  );
}
