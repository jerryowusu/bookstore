/* eslint-disable camelcase */
import { removeBooks } from '../redux/books/books';

export const removeBookFromAPI = (id) => async (dispatch) => (
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BqnHKAz15jWN0WeykxBg/books/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.text())
    .then(dispatch(removeBooks(id)))

);
export default removeBookFromAPI;
