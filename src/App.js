import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchPage from "./Components/Pages/SearchPage";
import BookShelfList from "./Components/Pages/BookShelfList";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookShelfList />} />
        <Route path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;
