import React from 'react';
import { useSelector } from 'react-redux';
import Books from '../components/Books';
import Form from '../components/Form';

const BooksPage = () => {
  const books = useSelector((store) => store.books);

  return (
    <>
      <Books books={books} />
      <Form categories={[]} />
    </>
  );
};

export default BooksPage;
