import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ name, number, id, onRemove }) {
  return (
    <div className={css.contactItemWrapper}>
      <div className={css.contactInfoWrap}>
        <p className={css.contactElem}>
          <FaUser />
          {name}
        </p>
        <p className={css.contactElem}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
