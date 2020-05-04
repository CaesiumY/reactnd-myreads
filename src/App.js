import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./Components/Pages/SearchPage";
import BookShelfList from "./Components/Pages/BookShelfList";

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
