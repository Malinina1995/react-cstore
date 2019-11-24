import React, { Component } from "react";

export class FiltersHeader extends Component {
  state = {
    items: document.getElementsByClassName("filtersHeader-item")
  }

  componentDidMount = () => {
    this.activeFilter();
  };

  changeFilters = (n) =>{
    for (let i = 0; i <  this.state.items.length; i++) {
       this.state.items[i].className =  this.state.items[i].className.replace(" actived", "");
       this.state.items[i].style.transition = 'all 0.2s ease-in-out';
    }
    this.state.items[n].className += ' actived';
    this.props.changeFiltersData(n);
  }

  activeFilter = () => {
    this.state.items[0].className += ' actived';
    this.props.changeFiltersData(0);
  }

  render() {
    return (
      <div className='filtersHeader_bottomLine'>
        <div className='filtersHeaderTop-wrapper'>
          <ul className="filtersHeader">
            <li className='filtersHeader-item' onClick={()=>{this.changeFilters(0)}}>
              <div className="filtersHeader_first"></div>
              <div className="filtersHeader_name">{this.props.headers[0].title}</div>
            </li>
            <li className='filtersHeader-item' onClick={()=>{this.changeFilters(1)}}>
              <div className="filtersHeader_second"></div>
              <div className="filtersHeader_name">{this.props.headers[1].title}</div>
            </li>
            <li className='filtersHeader-item' onClick={()=>{this.changeFilters(2)}}>
              <div className="filtersHeader_third"></div>
              <div className="filtersHeader_name">{this.props.headers[2].title}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
