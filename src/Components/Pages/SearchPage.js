import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { search } from "../../BooksAPI";
import BookComponent from "../BookComponent";
import BookShelf from "../BookShelf";

export default class SearchPage extends Component {
  static propTypes = {
    getBooksData: PropTypes.func.isRequired,
    onChangeLoading: PropTypes.func,
  };

  state = {
    query: "",
    searchResult: null,
  };

  getSearchData = () => {
    search(this.state.query).then((res) => {
      console.log(typeof res);
      this.setState({ searchResult: [...res] });
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
    const { query } = this.state;
    const { getBooksData, onChangeLoading } = this.props;
    const bookList = this.state.searchResult;
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
            {bookList && console.log(bookList)}
            {/* {bookList &&
              Object.values(bookList).map((book, index) => (
                <BookComponent
                  key={index}
                  book={book}
                  getData={getBooksData}
                  onChangeLoading={onChangeLoading}
                />
              ))} */}
            <BookShelf
              getData={getBooksData}
              shelfTitle="Search Results"
              BookList={bookList || []}
              onChangeLoading={onChangeLoading}
            />
          </ol>
        </div>
      </div>
    );
  }
}
