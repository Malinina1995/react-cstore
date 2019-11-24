import React, { Component } from "react";

export class ProductForFilter extends Component {
  render() {
    const url = {
      background: `url(${this.props.product.url}) no-repeat`,
      width: "202.8px",
      height: "240px",
      backgroundPosition: "center",
      backgroundSize: "contain",
      maxHeight: "240px",
      margin:"0 auto 15px auto"
    };
    return (
      <div className="product">
        <div>
          <a href='#' className='product-link'>
            <div style={url} />
            <div className="product-title">{this.props.product.name}</div>
          </a>
          <div className="product-price">{this.props.product.price}</div>
          <div className="buy_btn">
            <a href='#' className='buy_btn-link'>Купить</a>
          </div>
        </div>
      </div>
    );
  }
}
