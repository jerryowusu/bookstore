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
    <div className="flex flex-col gap-4 ">
      <h2 className="font-bold text-lg text-gray-500">Add New Book</h2>
      <form
        className="flex items-center flex-wrap gap-3"
        onSubmit={addBookToStore}
      >
        <input
          className="border rounded bg-white grow px-3 py-2"
          type="text"
          name="title"
          value={bookTitle}
          placeholder="Title"
          onChange={updateTitle}
          required
        />
        <input
          className="border rounded bg-white grow px-3 py-2"
          type="text"
          name="author"
          value={bookAuthor}
          placeholder="Author"
          onChange={updateAuthor}
          required
        />
        <select
          className="border rounded bg-white grow px-3 min-w-[12] py-2"
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
          className="w-45 h-12 px-4 grid place-content-center font-serif border rounded bg-blue-500 text-white uppercase text-sm font-bold"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
