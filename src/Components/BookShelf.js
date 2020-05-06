import React, { Component } from "react";
import PropTypes from "prop-types";
import BookComponent from "./BookComponent";

export default class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    BookList: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired,
    onChangeLoading: PropTypes.func.isRequired,
  };

  render() {
    const { shelfTitle, BookList, getData, onChangeLoading } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {BookList &&
              BookList.map((book, index) => (
                <BookComponent
                  key={index}
                  book={book}
                  getData={getData}
                  onChangeLoading={onChangeLoading}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
