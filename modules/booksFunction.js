import BookStore from './books';

const newBookStorage = new BookStore();

const bookStorage = JSON.parse(localStorage.getItem('bookCollection'));
if (bookStorage !== null) {
  newBookStorage.store = bookStorage;
}

export const loadBooksCollection = () => {
  const loopingBook = (book) => { return `<div id="${book.id}" class="book-card">
  <p class="book-details">
      "${book.title}" 
      by 
      ${book.author}
  </p>
  <button class="remove-button" data-book="${book.id}">Remove</button>
  </div>`;
  }

  const bookContainer = document.querySelector('.books-container');
  bookContainer.innerHTML = newBookStorage.store.map((book) => loopingBook(book)).join('');
  
    // remove button
  
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let id = Number(button.getAttribute('data-book'));
      newBookStorage.remove(id);
      loadBooksCollection();
      localStorage.setItem('bookCollection', JSON.stringify(newBookStorage.store));
    });
  });
}

export const loadContacts = () => {
    loopingContacts = (contact) => { return `<div class="contact-card">
    <div class="contact-image ${contact.classImage}"></div>
    <div class="contact-name text-center">${contact.name}</div>
    <div class="contact-details">
      <a class="contact-link" target="_blank" href="${contact.githubLink}">
        <i class="fab fa-github-square fa-fw fa-2xl"></i>
      </a>
      <a class="contact-link" target="_blank" href="${contact.linkedLink}">
        <i class="fab fa-linkedin fa-fw fa-2xl"></i>
      </a>
      <a class="contact-link" target="_blank" href="${contact.instagramLink}">
        <i class="fab fa-instagram-square fa-fw fa-2xl"></i>
      </a>
    </div>
  </div>`;
}

  const contactWrapper = document.querySelector('.contact-wrapper');

  contactWrapper.innerHTML = newBookStorage.contacts.map((contact) => loopingContacts(contact)).join('');
}
