import React, { Component } from "react";

export class Slide extends Component {

  render() {
    const imgStyle = {
      backgroundImage: `url(${this.props.url})`
    };
    return (
      <div className="mySlides fade">
        <a href="#">
          <div className="carusel-img" style={imgStyle} />
        </a>
      </div>
    );
  }
}
