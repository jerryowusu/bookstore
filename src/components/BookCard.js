/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import removeBooksFromAPI from '../API/removeBooksFromApi';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const bookRemove = () => dispatch(removeBooksFromAPI(book.item_id));

  return (
    <li className="flex flex-col flex-wrap gap-4 items-center bg-white w-fit  md:w-full  md:flex-row justify-between rounded-sm my-1 px-7 py-8 shadow-md">
      <div className="flex flex-col gap-6 justify-between items-start w-72">
        <div className="flex flex-col gap-0">
          <div className="font-bold text-sm text-black-two opacity-50 capitalize">{book.category}</div>
          <div className="text-xl font-bold font-roboto capitalize">{book.title}</div>
          <div className="text-sm font-light text-[#4386bf] text-azure font-roboto capitalize">{book.author}</div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <button type="button" className="text-sm text-[#4386bf] font-light text-azure font-roboto cursor-pointer">Comments</button>
          <span className="text-grey-border">|</span>
          <button
            type="submit"
            onClick={bookRemove}
            className="text-sm text-[#4386bf] font-light text-azure font-roboto cursor-pointer"
          >
            Remove

          </button>
          <span className="text-grey-border">|</span>
          <button type="button" className="text-sm text-[#4386bf] font-light text-azure font-roboto cursor-pointer">Edit</button>
        </div>
      </div>
      <div className="border-r pr-12 flex justify-center items-center gap-4 self-center ">
        <svg className="w-20" fill="none" stroke="currentColor" strokeWidth="7" viewBox="0 0 100 100">
          <path className="text-gray-200" strokeDasharray="250,0" d="M50 10a40 40 0 0 1 0 80 40 40 0 0 1 0-80" />
          <path className="text-blue-500" strokeDasharray="180,180" d="M50 10a40 40 0 0 1 0 80 40 40 0 0 1 0-80" />
        </svg>
        <div className="flex flex-col">
          <span
            className="text-3xl text-gray-900"
          >
            82%
          </span>
          <span
            className="text-sm text-gray-500"
          >
            Completed
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 font-serif sm:pl-8 md:pl-12">
        <p className="text-gray-400 text-sm uppercase">
          Current chapter
        </p>
        <p className="text-gray-900">
          Chapter 21
        </p>
        <button
          type="button"
          className="w-44 px-4 py-2 mt-4 grid place-content-center font-serif border rounded bg-blue-500 text-white uppercase text-sm"
        >
          Update Progress
        </button>
      </div>
    </li>
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
