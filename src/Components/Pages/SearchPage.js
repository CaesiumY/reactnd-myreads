import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../../BooksAPI";
import BookComponent from "../BookComponent";

export default class SearchPage extends Component {
  static propTypes = {};

  state = {
    query: "",
    searchResult: [],
  };

  getSearchData = () => {
    search(this.state.query).then((res) => {
      console.log(res);
      this.setState({ searchResult: res });
    });
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ query: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.getSearchData();
  };

  render() {
    const { query, searchResult } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <form
            onSubmit={this.handleSubmit}
            className="search-books-input-wrapper"
          >
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* {searchResult &&
              searchResult.map((book, index) => (
                <BookComponent book={book} key={index} />
              ))} */}
          </ol>
        </div>
      </div>
    );
  }
}
