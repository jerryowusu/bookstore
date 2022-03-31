const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const GOT_BOOKS = 'bookstore/books/GOT_BOOKS';

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

export const gotBooks = (books) => ({
  type: GOT_BOOKS,
  payload: {
    books,
  },
});

export const getBooks = () => async (dispatch) => {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BqnHKAz15jWN0WeykxBg/books');
  const booksArr = await result.json();
  const books = Object.entries(booksArr).map(([id, props]) => {
    const { author, category, title } = props[0];
    return {
      item_id: id,
      category,
      title,
      author,
    };
  });

  dispatch(gotBooks(books));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GOT_BOOKS:
      return [...state, ...action.payload.books];
    case GET_BOOKS:
      return getBooks();
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
