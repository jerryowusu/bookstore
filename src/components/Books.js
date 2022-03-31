import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from './BookCard';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (books.length) {
    return (
      <div className="books">
        {books.map((book) => (
          <BookCard
            // author={book.author}
            // title={book.title}
            // category={book.category}
            key={book.item_id}
            book={book}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="nobook">
      <h2>No books to show</h2>
    </div>
  );
};

export default Books;
