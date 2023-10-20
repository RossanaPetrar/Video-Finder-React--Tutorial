import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui category search centered page grid">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui icon input ">
              <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Search for a video..." className="search-input prompt " id="search-bar-input" />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
