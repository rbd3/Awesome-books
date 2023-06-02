export class BookStore {
    constructor() {
      this.store = [
        {
          id: 1,
          title: 'Moby-Dick',
          author: 'Herman Melville',
        },
        {
          id: 2,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
        },
        {
          id: 3,
          title: 'Harry Potter',
          author: 'J.K Rowling',
        },
        {
          id: 4,
          title: 'Laskar Pelangi',
          author: 'Andrea Hirata',
        },
      ];
  
      this.contacts = [
        {
          name: 'Andry Narson',
          classImage: 'Andry-img',
          githubLink: 'https://github.com/rbd3',
          linkedLink: 'https://linkedin.com/in/andry-narson-rabedesana-15b8b4248',
          instagramLink: 'https://twitter.com/@Narson321',
        },
      ];
    }

    add(book) {
        this.store.push(book);
      }
    
    remove(id) {
        this.store = this.store.filter((item) => item.id !== id);
      }
}  
