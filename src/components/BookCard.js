/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import removeBooksFromAPI from '../API/removeBooksFromApi';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const bookRemove = () => dispatch(removeBooksFromAPI(book.item_id));

  return (
    <div className="card">
      <div className="book-category">{book.category}</div>
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
      <div className="buttons">
        <button type="button" className="comments-btn">Comments</button>
        <button
          type="submit"
          onClick={bookRemove}
          className="remove-btn mx-5"
        >
          Remove

        </button>
        <button type="button" className="edit-btn">Edit</button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
