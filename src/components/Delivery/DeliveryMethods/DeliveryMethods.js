import React, { Component } from "react";
import "./DeliveryMethods.css";
import { DeliveryItem } from "../DeliveryItem/DeliveryItem";
import deliveryItems from "../../../jsonFiles/deliveryItems";
import paymentsWaysItem from '../../../jsonFiles/paymentsWaysItem';

export class DeliveryMethods extends Component {
  state = {
    fullInfo: [],
    openedFirst: true 
  };

  componentDidMount = () => {
    this.setState({
      fullInfo: deliveryItems.map(i => {
        return { ...i, open: false };
      })
    });
  };

  componentDidUpdate = () => {
    const item = this.props.openedDelivery ? deliveryItems : paymentsWaysItem;
    if(this.props.openedDelivery !== this.state.openedFirst){
      this.setState({
        fullInfo: item.map(i => {
          return { ...i, open: false };
        }),
        openedFirst: !this.state.openedFirst
      });
    }
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
                key={item.header}
                title={item.header}
                description={item.shortInfo}
                content={item.content}
                open={item.open}
                openFirst={this.state.openedFirst}
                openFullInfo={()=>{this.openFullInfo(index)}}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
