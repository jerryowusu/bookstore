/* eslint-disable camelcase */
const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const randomID = () => Math.round(Math.random() * 10000);

export const initialState = [];

export const addBooks = (data) => ({
  type: ADD_BOOK,
  payload: {
    ...data,
    id: randomID(),
  },
});

export const removeBooks = (item_id) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id,
  },
});

export const getBooks = (data) => ({
  type: GET_BOOKS,
  payload: {
    ...data,
    id: randomID(),
  },
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);
    default:
      return state;
  }
};

export default booksReducer;
