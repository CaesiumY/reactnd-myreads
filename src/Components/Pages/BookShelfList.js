import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../BooksAPI";
import BookShelf from "../BookShelf";

export default class BookShelfList extends Component {
  state = {
    books: {},
  };

  getBooksData = () => {
    getAll()
      .then((books) => {
        this.setState((state) => ({
          books,
        }));
        console.log("BookShelfList -> getBooksData -> books", books);
      })
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    this.getBooksData();
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle="Currently Reading" />
            <BookShelf shelfTitle="Want To Read" />
            <BookShelf shelfTitle="Read Done" />
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
