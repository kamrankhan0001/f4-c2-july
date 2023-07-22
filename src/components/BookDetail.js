import React from 'react';
//import './BookDetail.css';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
        
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <div className="book-info">
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.authors?.join(', ')}</p>
        <p>{book.volumeInfo.description}</p>
        <div className="buttons">
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
            Read Now
          </a>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
