import React, { useState } from 'react';
//import './SearchBar.css';
import Books from '../image/Books.svg';
import Book from '../image/newBook.svg';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for the book you want and read it now ...."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      
    </div>

    <div className='container'>
        
       
        <img src={Books}/>
        <img src={Books}/>
        <img src={Books}/>
        {/* <img src={Book}/>
        <img src={Book}/> */}
        
      </div>
    </>
  );
};

export default SearchBar;
