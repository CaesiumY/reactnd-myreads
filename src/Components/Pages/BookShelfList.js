import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "../BookShelf";

export default class BookShelfList extends Component {
  static propTypes = {
    shelves: PropTypes.object.isRequired,
    getBooksData: PropTypes.func.isRequired,
    onChangeLoading: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  };

  render() {
    const { currentlyReading, wantToRead, read } = this.props.shelves;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.props.isLoading ? <p className="loading">Loading...</p> : ""}
        <div className="list-books-content">
          <div>
            <BookShelf
              getData={this.props.getBooksData}
              shelfTitle="Currently Reading"
              BookList={currentlyReading}
              onChangeLoading={this.props.onChangeLoading}
            />
            <BookShelf
              getData={this.props.getBooksData}
              shelfTitle="Want To Read"
              BookList={wantToRead}
              onChangeLoading={this.props.onChangeLoading}
            />
            <BookShelf
              getData={this.props.getBooksData}
              shelfTitle="Read Done"
              BookList={read}
              onChangeLoading={this.props.onChangeLoading}
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
