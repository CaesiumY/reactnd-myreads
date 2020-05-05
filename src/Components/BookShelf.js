import React, { Component } from "react";
import PropTypes from "prop-types";
import BookComponent from "./BookComponent";

export default class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookComponent />
            <BookComponent />
          </ol>
        </div>
      </div>
    );
  }
}
