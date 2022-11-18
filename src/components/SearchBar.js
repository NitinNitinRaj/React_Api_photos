import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (evt) => {
    this.setState(() => ({
      [evt.target.name]: evt.target.value,
    }));
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="term">Image search</label>
            <input
              required
              id="term"
              type="text"
              name="term"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder={"Enter value"}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
