/* eslint-disable camelcase */
const ADD_BOOK = 'bookstore/books/ADD';
const BOOK_REMOVED = 'bookstore/books/REMOVED';
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

export const bookRemoved = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

export const removeBooks = (id) => (dispatch) => {
  let URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BqnHKAz15jWN0WeykxBg/books/';
  URL += id;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book_id: id,
    }),
  };

  fetch(URL, options)
    .then((res) => {
      if (res.status === 201) dispatch(bookRemoved(id));
    });
};

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
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    case REMOVE_BOOK:
      return removeBooks(action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
