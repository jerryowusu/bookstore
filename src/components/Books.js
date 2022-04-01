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
    <div className="bg-inherit w-fit h-8 p-2 text-center text-3xl my-20 mx-auto text-blue-400 grow">
      <h2>No books to show</h2>
      <p className="text-xl">Please enter books details in the form below</p>
    </div>
  );
};

export default Books;
