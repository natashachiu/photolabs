import React from 'react';
import '../styles/SearchBar.scss';
import useSearchBar from 'hooks/useSearchBar';
import SearchIcon from './SearchIcon';

const SearchBar = ({ onSubmit }) => {
  const { handleSubmit, searchTerm, setSearchTerm } = useSearchBar(onSubmit);

  return (
    <form className='SearchBar' onSubmit={handleSubmit}>
      <SearchIcon />
      <input type='text' placeholder='Search...' autoComplete='off'
        name='searchTerm' value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      <input type='submit' hidden />
    </form>
  );
};

export default SearchBar;