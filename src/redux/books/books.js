const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

// const randomID = () => Math.round(Math.random() * 10000);

export const initialState = [];

export const addBooks = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBooks = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
