import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  handleChange = event => {
    this.setState({ term: event.target.value }, () => this.props.onSearchTermChange(term));
  };

  render() {
    return (
      <div className="search-bar">
        <input onChange={this.handleChange} />
      </div>
    );
  }
}
