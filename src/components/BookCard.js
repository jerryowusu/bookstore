import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/Books';

const BookCard = ({
  id, name, author, category,
}) => {
  const dispatch = useDispatch();
    <div className="book-card bg-yellow-300 shadow-xl rounded-xl p-8 m-6">
      <div className="main-part">
        <h4 className="category">{category}</h4>
        <h2 className="book-name">{name}</h2>
        <p className="author">{author}</p>
        <li className="main-btns">
          <button type="button" className="comment-btn btn">Comments</button>
          <button type="button" className="remove-btn btn" onClick={() => { dispatch(removeBooks(id)); }}>Remove</button>
          <button type="button" className="edit-btn btn">Edit</button>
        </li>
      </div>
      <div className="progress-status">
        <div className="progress-chart" />
        <div>
          <h2>50%</h2>
          <p className="reading-status">Completed</p>
        </div>
      </div>
      <div className="progress-update">
        <p>Current Chapter</p>
        <p>Chapter 12</p>
        <button type="button" className="update-btn btn">UPDATE PROGRESS</button>
      </div>
    </div>;
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
