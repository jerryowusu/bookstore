import { getBooks } from '../redux/books/books';

export const getBooksFromAPI = () => async (dispatch) => {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BqnHKAz15jWN0WeykxBg/books');
  const booksArr = await result.json();
  const books = Object.entries(booksArr).map(([id, props]) => {
    const { category, title } = props[0];
    return {
      item_id: id,
      category,
      title,
    };
  });

  dispatch(getBooks(books));
};

export default getBooksFromAPI;
