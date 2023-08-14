import React, { useState } from 'react';
import '../styles/SearchBar.scss';
import useSearchBar from 'hooks/useSearchBar';

const SearchBar = ({ onSubmit }) => {
  const { handleSubmit, searchTerm, setSearchTerm } = useSearchBar(onSubmit);

  return (
    <form className='SearchBar' onSubmit={handleSubmit}>
      <input type='text' placeholder='Search...'
        name='searchTerm' value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;