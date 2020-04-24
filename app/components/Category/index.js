import React from 'react';
import FoodItems from '../../FoodItems.json';
import SearchBar from "../SearchBar";
import Filter from "../Filter";

class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allItems: FoodItems
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleSearch(key) {
    const originalItems = FoodItems;
    const currentItems = this.state.allItems;
    if(key) {
      let filteredItems = [];
      currentItems.categorys.forEach((value) => {
        let filteredItem = value.menuItems.filter((item) => {
          return item.name.toLowerCase().includes(key.toLowerCase());
        })
        filteredItems.push(filteredItem);
      });

      currentItems.categorys.map((value, index) => {
        return value.menuItems = filteredItems[index];
      });

      this.setState({
        allItems: currentItems
      });
    } else {
      this.setState({
        allItems: originalItems
      });
    }

  }

  handleFilter(key) {
    const allItems = FoodItems;
    const data = allItems.categorys.filter((value) => {
      return value.name.includes(key);
    });
    allItems.categorys = data;
    this.setState({allItems: allItems});
  }

  render() {

    return (
      <>
        <SearchBar handleSearch={this.handleSearch}/>
        <Filter vals={FoodItems.categorys} att="name" handleFilter={this.handleFilter}/>
        {
          this.state.allItems.categorys.map((value, index) => (
            <div>
            {
              value.menuItems.length > 0 && <>
                <div className="foodCategory" id={index}> {value.name}</div>
                {value.menuItems.map((item, indexItem) => (
                  <>
                    <p className="itemName" id={indexItem}>{item.name}</p>
                    <div className="detailsSection">
                      <div className="imageSection">
                        <img className="imageSize" src={item.images}/>
                      </div>
                      <div className="descriptionSection">
                        <p className="itemDescription">₹{item.price}</p>
                        <p className="itemDescription">{item.description}</p>
                      </div>
                    </div>
                  </>
                ))}
              </>
            }
            </div>
          ))
        }
      </>
    );
  }
}


export default Categories;
