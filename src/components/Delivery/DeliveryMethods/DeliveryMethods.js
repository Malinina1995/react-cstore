import React, { Component } from "react";
import "./DeliveryMethods.css";
import { DeliveryItem } from "../DeliveryItem/DeliveryItem";
import deliveryItems from "../../../jsonFiles/deliveryItems";

export class DeliveryMethods extends Component {
  state = {
    fullInfo: []
  };

  componentDidMount = () => {
    this.setState({
      fullInfo: deliveryItems.map(i => {
        return { ...i, open: false };
      })
    });
  };

  openFullInfo = i => {
    this.setState({
      fullInfo: this.state.fullInfo.map((item, index) => {
        return i === index && !item.open
          ? { ...item, open: true }
          : { ...item, open: false };
      })
    });
  };

  render() {
    return (
      <div className="delivery-methods">
        <div className="delivery-items">
          {this.state.fullInfo.map((item, index) => {
            return (
              <DeliveryItem
                title={item.header}
                description={item.shortInfo}
                content={item.content}
                open={item.open}
                openFullInfo={()=>{this.openFullInfo(index)}}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
