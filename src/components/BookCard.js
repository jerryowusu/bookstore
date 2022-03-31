import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooksFromAPI } from '../API/removeBooksFromAPI';

const BookCard = ({ book }) => {
  const {
    item_id: id, title, author, category,
  } = book;

  const dispatch = useDispatch();
  const bookRemove = () => dispatch(removeBooksFromAPI(id));

  return (
    <div className="book">
      <div className="book-author">{author}</div>
      <div className="book-tittle">{title}</div>
      <div className="book-category">{category}</div>
      <div className="buttons">
        <button type="button" className="comments-btn">Comments</button>
        <button
          type="submit"
          onClick={bookRemove}
          className="remove-btn"
        >
          Remove

        </button>
        <button type="button" className="edit-btn">Edit</button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  book: PropTypes.arrayOf.isRequired,
};

export default BookCard;
