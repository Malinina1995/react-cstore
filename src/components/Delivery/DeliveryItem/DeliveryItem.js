import React, { Component } from "react";
import "./DeliveryItem.css";

export function DeliveryItem ({title, description, content, open, openFullInfo}) {
    return (
      <div className="delivery-item" key={title}>
        <div
          className="delivery-item-header"
          onClick={() => {
            openFullInfo();
          }}
        >
          {title}
          <span />
        </div>
        <div className="delivery-item-shortInfo">{description}</div>
        {open && <div dangerouslySetInnerHTML={{__html: content}}/>}
      </div>
    );
}
