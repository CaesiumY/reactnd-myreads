import React, { Component } from "react";
import PropTypes from "prop-types";
import BookComponent from "./BookComponent";

export default class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    BookList: PropTypes.array.isRequired,
  };

  render() {
    const { shelfTitle, BookList } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {BookList &&
              BookList.map((book, index) => (
                <BookComponent key={index} book={book} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
