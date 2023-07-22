import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';


const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  

  useEffect(() => {
    // Fetch initial book data for "harry potter"
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => {
        setBooks(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });

    // Fetch initial book data for "Sherlock Holmes"
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
      .then(response => {
        setBooks(prevBooks => [...prevBooks, ...response.data.items]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = (query) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => {
        setBooks(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Navbar />
      
      <SearchBar onSearch={handleSearch} />
      {selectedBook && <BookDetail book={selectedBook} />}
      <BookList books={books} onBookClick={handleBookClick} />
      
    </div>
  );
};

export default App;
