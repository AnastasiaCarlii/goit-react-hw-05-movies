import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" value={query} onChange={handleChange} />
      <button type="submit"> Search</button>
    </form>
  );
};
