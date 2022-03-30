import { combineReducers, createStore } from 'redux';
import booksReducer from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
