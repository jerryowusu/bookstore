import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/Books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const updateTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const updateAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className="main">
      <h2 className="description">Add New Book</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBooks({
            title: title.trim(),
            author: author.trim(),
          }));
          setTitle('');
          setAuthor('');
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={updateTitle}
          required
        />
        <input
          type="text"
          name="author"
          value={author}
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
