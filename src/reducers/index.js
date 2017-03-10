import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  books: BooksReducer
    // this adds the key 'books' to the 'global' application state - where key is books, and value is whatever comes back from
    // books reducer
});

export default rootReducer;
