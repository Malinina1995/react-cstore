import React, { Component } from "react";
import "./DropDown.css";

export class DropDown extends Component {
  state = {};

  selectShop = () => {
  };

  render() {

    return (
      <div className="shopMain-block-nothing" >
        {this.props.autocomplete.length ? (
          this.props.autocomplete.map(i =>{
            return <div key={i}
            className="shopMain-block-nothing-arr"
            onClick={this.selectShop}
          >
            {i}
          </div>
          }
        )) : (
          <span>Ничего не найдено</span>
        )}
      </div>
    );
  }
}
