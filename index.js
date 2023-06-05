import BookStore from './modules/books.js';
import { loadBooksCollection, loadContacts } from './modules/booksFunction.js';
import getCurrentDate from './modules/CurrentDate.js';

const newBookStorage = new BookStore();

const currentDateElement = document.querySelector('.datetime');
currentDateElement.textContent += getCurrentDate();

const bookStorage = JSON.parse(localStorage.getItem('bookCollection'));
if (bookStorage !== null) {
  newBookStorage.store = bookStorage;
}

loadBooksCollection();
// add books
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const addButton = document.querySelector('#add-book-button');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  let newid;
  if (newBookStorage.store.length === 0) {
    newid = 1;
  } else {
    newid = newBookStorage.store[newBookStorage.store.length - 1].id + 1;
  }
  const newBook = {
    id: newid,
    title: titleInput.value,
    author: authorInput.value,
  };
  newBookStorage.add(newBook);
  loadBooksCollection();
  titleInput.value = '';
  authorInput.value = '';
  localStorage.setItem('bookCollection', JSON.stringify(newBookStorage.store));
});

const navLinks = document.querySelectorAll('.links');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const dataLink = link.getAttribute('data-page');
    const listBookSection = document.querySelector('.list-book-section');
    const newBookSection = document.querySelector('.new-book-section');
    const contactUsSection = document.querySelector('.contact-us-section');

    switch (dataLink) {
      case 'list':
        listBookSection.setAttribute('data-visible', true);
        newBookSection.setAttribute('data-visible', false);
        contactUsSection.setAttribute('data-visible', false);
        break;
      case 'add-new':
        newBookSection.setAttribute('data-visible', true);
        listBookSection.setAttribute('data-visible', false);
        contactUsSection.setAttribute('data-visible', false);
        break;
      case 'contacts':
        contactUsSection.setAttribute('data-visible', true);
        newBookSection.setAttribute('data-visible', false);
        listBookSection.setAttribute('data-visible', false);
        break;
      default:
        break;
    }
  });
});

loadContacts();