import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const Books = ({ books }) => {
  const booklists = books.map((book) => {
    const key = book.id;

    return (
      <BookCard
        key={key}
        id={book.id}
        name={book.name}
        author={book.author}
        category={book.category}
      />
    );
  });
  return (
    booklists
  );
};

Books.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Books.defaultProps = {
  books: [],
};

export default Books;
