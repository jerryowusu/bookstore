const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

export const addBooks = ({ name, category, author}) => ({
  type: ADD_BOOK,
  id: Date.now(),
  name,
  category,
  author,
});

export const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
