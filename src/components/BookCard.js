import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/Books';

const BookCard = (props) => {
  const dispatch = useDispatch();
  const { id, name, author } = props;
  return (
    <li className="card">
      {name}
      -
      {author}
      <button
        type="button"
        onClick={() => {
          dispatch(removeBooks(id));
        }}
      >
        Remove
      </button>
    </li>
  );
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookCard;
