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
      <div className="flex flex-col pb-100 pt-12 px-6 md:px-24 gap-4 my-10 bg-dirty-white">
        {books.map((book) => (
          <BookCard
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
