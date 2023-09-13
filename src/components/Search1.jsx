import { useState } from 'react';
import search_icon from '../assets/Search -black.png';
import '../styles/Search1.css';
import { useNavigate } from 'react-router-dom';

const Search1 = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleIconClick = () => {
    handleSearch();
  }

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search/${query}`);
    }
  }

  const handleFocus = () => {
    setQuery('');
  }

  const handleBlur = () => {
    if (query.trim() === '') {
      setQuery('');
    }
  }

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="searchbar1"
        placeholder="What do you want to watch?"
      />
      <img
        src={search_icon}
        alt=""
        className='search-icon'
        onClick={handleIconClick}
      />
    </>
  );
}

export default Search1;
