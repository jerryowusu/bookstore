import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const BookCard = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  return (
    <li className="">
      <div className="px-6 py-4 m-1">
        {title}
        -
        {author}
      </div>
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookCard;
