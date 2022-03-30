import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/Books';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const updateTitle = (e) => {
    e.preventDefault();
    setBookTitle(e.target.value);
  };

  const updateAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className="main">
      <h2 className="description">Add New Book</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(bookTitle, bookAuthor);
          dispatch(addBooks({
            title: bookTitle.trim(),
            author: bookAuthor.trim(),
          }));
          setBookTitle('');
          setBookAuthor('');
        }}
      >
        <input
          type="text"
          name="title"
          value={bookTitle}
          placeholder="Title"
          onChange={updateTitle}
          required
        />
        <input
          type="text"
          name="author"
          value={bookAuthor}
          placeholder="Author"
          onChange={updateAuthor}
          required
        />
        <select
          name="category"
        >
          <option value="">Select a Category </option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Romance">Romance</option>
          <option value="Biography">Biography</option>
          <option value="Religion">Religion</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
