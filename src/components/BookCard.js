/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import removeBooksFromAPI from '../API/removeBooksFromApi';

const BookCard = (props) => {
  const {
    item_id, title, author, category,
  } = props;

  console.log(props);

  const dispatch = useDispatch();
  const bookRemove = () => dispatch(removeBooksFromAPI(item_id));

  return (
    <div className="book">
      <div className="book-category">{category}</div>
      <div className="book-author">{author}</div>
      <div className="book-tittle">{title}</div>
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
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
