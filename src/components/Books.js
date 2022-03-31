import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const Books = (props) => {
  const { books } = props;
  const booklists = books.map((book) => (
    <BookCard
      key={book.item_id}
      item_id={book.item_id}
      title={book.title}
      author={book.author}
      category={book.category}
    />
  ));
  return (
    booklists
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Books.defaultProps = {
  books: [],
};

export default Books;
