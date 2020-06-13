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

  state = {
    shelfTitleList: ["Currently Reading", "Want To Read", "Read Done"],
  };

  render() {
    const { currentlyReading, wantToRead, read } = this.props.shelves;
    const { shelfTitleList } = this.state;
    const shelveList = [currentlyReading, wantToRead, read];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.props.isLoading ? <p className="loading">Loading...</p> : ""}
        <div className="list-books-content">
          <div>
            {shelfTitleList.map((shelfTitle, index) => (
              <BookShelf
                key={shelfTitle}
                getData={this.props.getBooksData}
                shelfTitle={shelfTitle}
                BookList={shelveList[index]}
                onChangeLoading={this.props.onChangeLoading}
              />
            ))}
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
