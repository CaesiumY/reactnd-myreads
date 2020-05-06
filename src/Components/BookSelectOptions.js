import React, { Component } from "react";
import PropTypes from "prop-types";
import { update } from "../BooksAPI";

export default class BookSelectOptions extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    getData: PropTypes.func.isRequired,
    onChangeLoading: PropTypes.func.isRequired,
  };

  state = {
    selected: this.props.book.shelf,
  };

  handleChange = async (e) => {
    const { value } = e.target;
    await this.setSelectedShelf(value);
    this.updateData();
  };

  setSelectedShelf = (value) => {
    this.setState((state) => ({
      selected: value,
    }));
    this.props.onChangeLoading(true);
  };

  updateData = () => {
    const { book, getData } = this.props;
    const selectedShelf = this.state.selected;
    update(book, selectedShelf).then(() => {
      getData();
    });
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.selected || ""} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
