import { addBooks } from '../redux/books/books';

const addBooksToAPI = (book) => async (adding) => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi', {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(res);

  if (res.status === 200) {
    adding(addBooks(book));
  }
};

export default addBooksToAPI;
