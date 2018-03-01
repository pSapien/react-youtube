import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  static propTypes = {
    onSearchTermChange: PropTypes.func.isRequired,
  }

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
