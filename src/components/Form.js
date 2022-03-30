import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/books';

const Form = () => {
  let inputName;
  let inputAuthor;
  let inputCategory;

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: 'Jerry',
    category: 'love',
    author: 'Jerry',
  });

  return (
    <div className="main">
      <h2 className="description">Add New Book</h2>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputName.value.trim() || !inputCategory.value.trim() || !inputAuthor.value.trim()) {
            return;
          }
          dispatch(addBooks(state));
          inputName.value = '';
          inputCategory.value = '';
        }}
      >
        <input
          type="text"
          placeholder="Title"
          ref={(node) => { inputName = node; }}
          onChange={(e) => {
            const State = {
              ...state,
              name: e.target.value,
            };
            setState(State);
          }}
        />
        <input
          type="text"
          placeholder="Author"
          ref={(node) => { inputAuthor = node; }}
          onChange={(e) => {
            const State = {
              ...state,
              name: e.target.value,
            };
            setState(State);
          }}
        />
        <select
          ref={(node) => { inputCategory = node; }}
          onChange={(e) => {
            const State = {
              ...state,
              name: e.target.value,
            };
            setState(State);
          }}
        >
          <option value="">Select a Category </option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Romance">Romance</option>
          <option value="Biography">Biography</option>
          <option value="Religion">Religion</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
