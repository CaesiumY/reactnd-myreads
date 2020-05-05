import React, { Component } from "react";
import PropTypes from "prop-types";
import BookSelectOptions from "./BookSelectOptions";

export default class BookComponent extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
              }}
            />
            <BookSelectOptions />
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
