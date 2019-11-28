import React, { Component } from 'react';

export class Item extends Component {
  render(){
    const style={
      background: `url(${this.props.item.image}) no-repeat`,
      width: "472px",
      height: "350px",
      backgroundPosition: "center",
    }
    return (
      <div className='item'>
        <div className='item-image' style={style}>
          <a href='#'></a>
        </div>
        <div className='item-info'>
          <div className='item-date'>{this.props.item.date}</div>
          <div className='item-info-title'>
            <a href='#'>{this.props.item.title}</a>
          </div>
          <div className='item-info-text'>
            <p>{this.props.item.main}</p>
          </div>
          <div className='item-info-link'>
            <a href='#'>Все новости</a>
          </div>
        </div>
      </div>
    )
  }
}