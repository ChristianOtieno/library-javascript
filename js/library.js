import { bookHtml } from './dom.js';

const myLibrary = [];

// book constructor
function Book(author, title, pages, status = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

// updating array
function addBookToLibrary() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').value;

  myLibrary.push(new Book(author, title, pages, status));

  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('status').value = '';
}


myLibrary.push(new Book('author1', 'title1', 123, true));
myLibrary.push(new Book('author2', 'title2', 123, false));
myLibrary.push(new Book('author3', 'title3', 123, true));

function render() {
  const layout = myLibrary.map(book => bookHtml(book));
  document.getElementById('book-list').innerHTML = layout;
}

render();