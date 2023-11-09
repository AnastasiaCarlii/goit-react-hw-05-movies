import { useState } from 'react';

import styles from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') return alert('can not be empty');
    onSubmit(query);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        name="query"
        type="text"
        value={query}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        {' '}
        Search
      </button>
    </form>
  );
};
