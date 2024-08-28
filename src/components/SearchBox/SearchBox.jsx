import css from './SearchBox.module.css';

export default function SearchBox({ search, onSearch }) {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
}
