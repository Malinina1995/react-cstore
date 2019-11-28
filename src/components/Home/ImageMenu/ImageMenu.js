import React, { Component } from 'react';
import './imageMenuStyle.css';

export class ImageMenu extends Component {

  render(){
    return (
      <div className='imageMenu'>
        <div className='imageMenu-wrapper'>
          <div className='categoryItem'>
            <a href="#">
              <div className='categoryItem-img_first'></div>
              <div className='categoryItem-title'>iPhone</div>
            </a>
          </div>
          <div className='categoryItem'>
            <a href="#">
              <div className='categoryItem-img_second'></div>
              <div className='categoryItem-title'>iPad</div>
            </a>
          </div>
          <div className='categoryItem'>
            <a href="#">
              <div className='categoryItem-img_third'></div>
              <div className='categoryItem-title'>Watch</div>
            </a>
          </div>
          <div className='categoryItem'>
            <a href="#">
              <div className='categoryItem-img_fourth'></div>
              <div className='categoryItem-title'>Mac</div>
            </a>
          </div>
          <div className='categoryItem'>
            <a href="#">
              <div className='categoryItem-img_fifth'></div>
              <div className='categoryItem-title'>Beats</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}