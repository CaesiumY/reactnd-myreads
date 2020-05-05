import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../BooksAPI";
import BookShelf from "../BookShelf";

export default class BookShelfList extends Component {
  state = {
    books: {},
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
  };

  getBooksData = () => {
    getAll()
      .then((books) => {
        this.setState((state) => ({
          books,
        }));
        console.log("BookShelfList -> getBooksData -> books", books);
        this.categorizeBooks();
      })
      .catch((e) => console.error(e));
  };

  categorizeBooks = () => {
    const { books, shelves } = this.state;
    const shelfTitles = Object.keys(shelves);
    shelfTitles.map((title) => {
      return this.setState((state) => ({
        shelves: {
          ...state.shelves,
          [title]: this.filterBookShelf(books, title),
        },
      }));
    });
  };

  filterBookShelf = (books, shelfTitle) => {
    return books.filter((book) => book.shelf === shelfTitle);
  };

  updateShelfData = (book, shelfTitle) => {};

  componentDidMount() {
    this.getBooksData();
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state.shelves;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              getData={this.getBooksData}
              shelfTitle="Currently Reading"
              BookList={currentlyReading}
            />
            <BookShelf
              getData={this.getBooksData}
              shelfTitle="Want To Read"
              BookList={wantToRead}
            />
            <BookShelf
              getData={this.getBooksData}
              shelfTitle="Read Done"
              BookList={read}
            />
          </div>
        </div>
        <div className="open-search">
          <Link className="search-link" to="/search">
            Add a Book
          </Link>
        </div>
      </div>
    );
  }
}
