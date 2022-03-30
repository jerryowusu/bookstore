const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

const randomID = () => Math.round(Math.random() * 10000);

export const initialState = [];

export const addBooks = (data) => ({
  type: ADD_BOOK,
  payload: {
    ...data,
    id: randomID(),
  },
});

export const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
