let myLibrary = [];

function Book(title, author, pages, done) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.done = done; 
}

function addBookToLibrary(title, author, pages, done) {
  const book = new Book(title, author, pages, done);
  myLibrary.push(book);
}