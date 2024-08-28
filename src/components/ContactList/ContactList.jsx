import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onRemove }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onRemove={onRemove}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
}
