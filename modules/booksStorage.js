import { BookStore } from './books.js';

const newBookStorage = new BookStore();

export const bookStorage = JSON.parse(localStorage.getItem('bookCollection'));
if (bookStorage !== null) {
  newBookStorage.store = bookStorage;
}