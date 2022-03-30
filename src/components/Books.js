import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const Books = ({ books }) => {
  const booklist = books.map((book) => {
    const j = book.id;

    return (
      <BookCard
        key={j}
        id={book.id}
        name={book.name}
        author={book.author}
        category={book.category}
      />
    );
  });
  return (
    booklist
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Books.defaultProps = {
  books: [],
};

export default Books;
