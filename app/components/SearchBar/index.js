import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      value: ""
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleChange(key) {
    this.setState({value: key.target.value});
  }

  handleClick() {
    const { handleSearch } = this.props;
    handleSearch(this.state.value);
  }

  render()
  {
    return (
      <div className="searchSection">
        <input type="text" className="searchInput" onChange={this.handleChange.bind(this)} value={this.state.value}
               placeholder="Please enter the name of the dish you want to eat"></input>
        <button className="searchButton" onClick={this.handleClick}> Search</button>
      </div>
    );
  }
}

export default SearchBar;
