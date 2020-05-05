import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BookSelectOptions extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  state = {
    selected: this.props.book.shelf,
  };

  handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    this.setState((state) => ({
      selected: value,
    }));
  };

  componentDidMount() {
    console.log("shelftitle", this.props.book.shelf);
  }

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
