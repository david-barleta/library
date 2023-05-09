const favoriteButtons = document.querySelectorAll(".favorite")
let myLibrary = [];

function Book(title, author, pages, done) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.done = done; 
}

function addBookToLibrary(title, author, favorite, done) {
  const book = new Book(title, author, favorite, done);
  myLibrary.push(book);
}

function changeFavoriteStatus(button) {
  const icon = button.target;
  if (icon.alt == "Favorite") {
    icon.src = "images/not-favorite-icon.png";
    icon.alt = "Not favorite";
  } else {
    icon.src = "images/favorite-icon.png";
    icon.alt = "Favorite";
  }
}

favoriteButtons.forEach(button => {
  button.addEventListener('click', changeFavoriteStatus);
})