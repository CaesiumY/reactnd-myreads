import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { search } from "../../BooksAPI";
import BookShelf from "../BookShelf";

export default class SearchPage extends Component {
  static propTypes = {
    getBooksData: PropTypes.func.isRequired,
    mybooks: PropTypes.array.isRequired,
    onChangeLoading: PropTypes.func,
  };

  state = {
    query: "",
    result: [],
  };

  getSearchData = () => {
    const { onChangeLoading } = this.props;
    const query = this.state.query;
    onChangeLoading(true);
    search(query)
      .then((books) => {
        this.setState({ result: this.onAddShelf(books) }, () => {
          onChangeLoading(false);
          console.log(books);
        });
      })
      .catch((e) => {
        alert("Wrong Keywords");
        this.setState({ query: "" });
      });
  };

  getCurrentShelf = (searchedBook) => {
    const homeBooks = this.props.mybooks;
    let shelfTitle = "none";
    homeBooks.forEach((book) => {
      if (book.id === searchedBook.id) {
        shelfTitle = book.shelf;
      }
    });
    return shelfTitle;
  };

  onAddShelf = (books) => {
    return books.map((book) => {
      return {
        ...book,
        shelf: this.getCurrentShelf(book),
        authors: [book.authors ? book.authors : "unknown"],
      };
    });
  };

  resetSearchResult = () => {
    this.setState({ result: [] });
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ query: value });
    if (!value) this.resetSearchResult();
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.getSearchData();
  };

  render() {
    const { query } = this.state;
    const { getBooksData, onChangeLoading } = this.props;
    const bookList = this.state.result;
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
            <BookShelf
              getData={getBooksData}
              shelfTitle={
                bookList.length !== 0
                  ? `Search Result : ${query}`
                  : "Search your Keywords"
              }
              BookList={bookList || []}
              onChangeLoading={onChangeLoading}
            />
          </ol>
        </div>
      </div>
    );
  }
}
