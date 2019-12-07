import React, { Component } from 'react';

export function Item(props) {
    const style={
      background: `url(${props.item.image}) no-repeat`,
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
          <div className='item-date'>{props.item.date}</div>
          <div className='item-info-title'>
            <a href='#'>{props.item.title}</a>
          </div>
          <div className='item-info-text'>
            <p>{props.item.main}</p>
          </div>
          <div className='item-info-link'>
            <a href='#'>Все новости</a>
          </div>
        </div>
      </div>
    )
  
}