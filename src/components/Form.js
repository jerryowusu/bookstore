import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import addBooksToAPI from '../API/addBooksToAPI';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const updateTitle = (e) => {
    e.preventDefault();
    setBookTitle(e.target.value);
  };

  const updateAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const updateCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const addBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: bookTitle,
      category: bookCategory,
      author: bookAuthor,
    };
    dispatch(addBooksToAPI(newBook));

    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
  };

  return (
    <div className="main">
      <h2 className="description">Add New Book</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={addBookToStore}
      >
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          value={bookTitle}
          placeholder="Title"
          onChange={updateTitle}
          required
        />
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="author"
          value={bookAuthor}
          placeholder="Author"
          onChange={updateAuthor}
          required
        />
        <select
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="category"
          value={bookCategory}
          onChange={updateCategory}
        >
          <option value="">Select a Category </option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Romance">Romance</option>
          <option value="Biography">Biography</option>
          <option value="Religion">Religion</option>
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
