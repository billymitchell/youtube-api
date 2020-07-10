import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //ToDo: pass value to api to update video list
    //pass the search term up to app.js into the onFormSubmit function
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
