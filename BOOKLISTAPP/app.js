//BOOK CLASS: Represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    //looping through books array
    books.forEach(book => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  //creating alert with bootstrap classes
  static showAlert(message, className) {
    //creating div for alert message
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    //timeout for alert message
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

//Store Class: Handle Storage , local storage:- can't store objects it has to be string
class Store{
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    }else {
      books = JSON.parse(localStorage.getItem('books')); //use it as javascript method as string
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books)); //wrapping as string in js with strigify method
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}


//Event: Display BOOK
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event:  Add a BOOK
document.querySelector("#book-form").addEventListener("submit", e => {
  //prevent actual submit event
  e.preventDefault();

  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //validations
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all the fields!", "danger");
  } else {
    //Instaniate Class Book
    const book = new Book(title, author, isbn);

    //Add Book to UI class
    UI.addBookToList(book);

    //ADD BOOK TO STORE CLASS
    Store.addBook(book);

    //show success message
    UI.showAlert('Book Added', 'success');

    //Clear Fields
    UI.clearFields();
  }
});
//Event:  Remove a BOOK
document.querySelector("#book-list").addEventListener("click", (e) => {
  //REMOVE BOOK FROM UI
    UI.deleteBook(e.target);

    //REMOVE BOOK FROM STORE
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //show deleted message
    UI.showAlert('Book Removed', 'success');
  });
