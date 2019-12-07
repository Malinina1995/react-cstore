import React, { Component } from "react";

export function ProductForFilter({product, delivery}) {
    const url = delivery ? {
      background: `url(${product.url}) no-repeat`,
      width: "150px",
      height: "200px",
      backgroundPosition: "center",
      backgroundSize: "contain",
      maxHeight: "240px",
      margin:"0 auto 15px auto"
    } : {
      background: `url(${product.url}) no-repeat`,
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
            <div className="product-title">{product.name}</div>
          </a>
          <div className="product-price">
            <span>{product.price}</span>
            {
              delivery && <span className='product-oldPrice'>{product.oldPrice}</span>
            }
          </div>
          <div className="buy_btn">
            <a href='#' className='buy_btn-link'>Купить</a>
          </div>
        </div>
      </div>
    );
  
}
