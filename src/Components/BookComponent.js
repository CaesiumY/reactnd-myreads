import React, { Component } from "react";
import PropTypes from "prop-types";
import BookSelectOptions from "./BookSelectOptions";

export default class BookComponent extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    getData: PropTypes.func,
    onChangeLoading: PropTypes.func,
  };

  render() {
    const { book, getData, onChangeLoading } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks
                  ? `url(${book.imageLinks.smallThumbnail})`
                  : "",
              }}
            />
            <BookSelectOptions
              getData={getData}
              book={book}
              onChangeLoading={onChangeLoading}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors.map((author) => (
              <span key={author}>
                - {author}
                <br />
              </span>
            ))}
          </div>
        </div>
      </li>
    );
  }
}
