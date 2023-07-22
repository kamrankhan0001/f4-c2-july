import React from 'react';
//import './BookList.css';

const BookList = ({ books, onBookClick }) => {
  return (
    
    <div className="book-list">
        
      {books.map(book => (
        <div key={book.id} className="book-card" onClick={() => onBookClick(book)}>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
