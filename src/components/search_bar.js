import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input className="col-md-8"
          type="text"
          placeholder="Search..."
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <div className="col-md-4 top-marg">
          <h5>Related Searches:</h5>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
