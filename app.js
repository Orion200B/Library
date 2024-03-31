const addBook = document.querySelector("#addBook");
const library = document.querySelector(".library");
const nevermind = document.getElementById("no");
const info = document.getElementById("bookInfo");
const add = document.getElementById("yes");
const myLibrary = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readIt = document.getElementById("readit");

addBook.addEventListener("click", (e) => {
    info.style.display = "flex";
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const book = new Book(title.value, author.value, pages.value, readIt.checked);
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "books");
    library.appendChild(bookContainer);
    //title
    const bookTitle = document.createElement("div");
    bookTitle.setAttribute("id", "bookTitle");
    bookTitle.textContent = book.title;
    bookContainer.appendChild(bookTitle);
    //author
    const bookAuthor = document.createElement("div");
    bookAuthor.setAttribute("id", "bookAuthor");
    bookAuthor.textContent = "By: " + book.author;
    bookContainer.appendChild(bookAuthor);
    //pages
    const bookPage = document.createElement("div");
    bookPage.setAttribute("id", "bookPages");
    bookPage.textContent = book.pages + " Pages";
    bookContainer.appendChild(bookPage);
    //read
    const bookRead = document.createElement("button");
    bookRead.setAttribute("id", "bookRead");
    bookContainer.appendChild(bookRead);
    if(book.read){
        bookRead.textContent = "Read It";
    } else if (!book.read){
        bookRead.textContent = "Not Read It";
        bookRead.style.backgroundColor = "#800000";
    }
    bookRead.addEventListener("click", (e) =>{
        if(bookRead.textContent == "Read It"){
            bookRead.textContent = "Not Read It";
            bookRead.style.backgroundColor = "#800000";
        }else {
            bookRead.textContent = "Read It";
            bookRead.style.backgroundColor = "#013220";
        }
    });
    //delete
    const bookDelete = document.createElement("button");
    bookDelete.setAttribute("id", "delete");
    bookContainer.appendChild(bookDelete);
    bookDelete.textContent = "Delete";
    bookDelete.addEventListener("click", (e) => {
        bookDelete.parentElement.remove();
    });
    //push book to library array
    myLibrary.push(book);
}

add.addEventListener("click", (e) => {
    addBookToLibrary();
    e.preventDefault();
    info.style.display = "none";
});

nevermind.addEventListener("click", (e) => {
    info.style.display = "none";
    e.preventDefault();
});