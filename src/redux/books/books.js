const ADD_BOOKS = 'ADD_BOOKS';
const REMOVE_BOOKS = 'REMOVE_BOOKS';

const INITIAL_STATE = {
  books: [],
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case REMOVE_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export const setBooks = (books) => ({
  type: ADD_BOOKS,
  payload: books,
});

export default booksReducer;
