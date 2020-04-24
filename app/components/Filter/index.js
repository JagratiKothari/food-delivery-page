import React from 'react';

class Filter extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      value: "Select Category"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { handleFilter } = this.props;
    this.setState({value: event.target.value});
    handleFilter(event.target.value);
  }
  //
  // handleChange(key) {
  //   this.setState({value: key.target.value});
  // }
  //
  // handleClick() {
  //   const { handleSearch } = this.props;
  //   handleSearch(this.state.value);
  // }

  render()
  {
    const { vals, att } = this.props;
    return (
      <div className="filterSection">
        <select className="selectBox" value={this.state.value} onChange={this.handleChange} id="categories">
          <option disabled selected value="None"> Select </option>
          {
            vals.map((val) => {
              return <option value={val[att]}>{val[att]}</option>
           })
          }
        </select>
      </div>
    );
  }
}

export default Filter;
