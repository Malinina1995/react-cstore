import React, { Component } from "react";

export function Slide(props) {
    const imgStyle = {
      backgroundImage: `url(${props.url})`
    };
    return (
      <div className="mySlides fade">
        <a href="#">
          <div className="carusel-img" style={imgStyle} />
        </a>
      </div>
    );

}
