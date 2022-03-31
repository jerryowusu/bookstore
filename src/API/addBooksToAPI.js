import { addBooks } from '../redux/books/books';

const addBooksToAPI = (book) => async (adding) => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jbooks/books', {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    adding(addBooks(book));
  }
};

export default addBooksToAPI;
