import React, { Component } from "react";
import "./DeliveryItem.css";



export function DeliveryItem({
  title,
  description,
  content,
  open,
  openFirst,
  openFullInfo
}) {
  let arrow = {
    transform: open ? "rotate(180deg)" : "rotate(0deg)"
  };

  return (
    <div className="delivery-item" key={title}>
      <div
        className="delivery-item-header"
        onClick={() => {
          openFullInfo()
        }}
      >
        <div className="delivery-item-header-pay" dangerouslySetInnerHTML={{ __html: title }} />
        <span className='delivery-item-header-arrow' style={arrow}/>
      </div>
      {openFirst && <div className="delivery-item-shortInfo">{description}</div>}
      {open && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
}
