import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./Components/Pages/SearchPage";
import BookShelfList from "./Components/Pages/BookShelfList";
import { getAll } from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: {},
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
    isLoading: true,
  };

  onChangeLoading = (value) => {
    this.setState((state) => ({
      isLoading: value,
    }));
  };

  getBooksData = () => {
    getAll()
      .then((books) => {
        this.setState((state) => ({
          books,
        }));
        this.onChangeLoading(false);
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

  componentDidMount() {
    this.getBooksData();
  }

  render() {
    const { shelves, isLoading } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelfList
              shelves={shelves}
              getBooksData={this.getBooksData}
              onChangeLoading={this.onChangeLoading}
              isLoading={isLoading}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              getBooksData={this.getBooksData}
              onChangeLoading={this.onChangeLoading}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
