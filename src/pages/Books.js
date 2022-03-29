import React from 'react';
import { useSelector } from 'react-redux';
import Books from '../components/Books';
import Form from '../components/Form';

const BookPage = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <Books books={books} />
      <Form />
    </>
  );
};

export default BookPage;
