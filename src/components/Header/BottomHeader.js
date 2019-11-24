import React, { Component } from 'react';

export class BottomHeader extends Component {
  state = {
    items: document.getElementsByClassName("bottom-header-menu-item")
  }

  changeOpasity = (n) => {
    for(let i = 0; i < this.state.items.length; i++){
      if(i === n) continue;
      this.state.items[i].className += ' mouseOver';
    }
  }

  changeFocus = () => {
    for(let i = 0; i < this.state.items.length; i++){
      this.state.items[i].className =  this.state.items[i].className.replace(" mouseOver", "");
    }
  }

  render(){
    return (
      <div className='bottom-header'>
        <div className='bottom-header-wrapper'>
          <div className='bottom-header-logo'>
            <a href='/'>
              <div className='bottom-header-logo_left'>
                <div className='bottom-header-logo_left-logo'></div>
              </div>
              <div className='bottom-header-logo_right'></div>
            </a>
          </div>
          <div className='bottom-header-menu'>
            <div className='bottom-header-menu-list'>
              <ul className='bottom-header-menu-items'>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(0)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>iPhone</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(1)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>iPad</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(2)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>Mac</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(3)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>Watch</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(4)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>TV</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(5)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>Beats</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(6)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>iPod</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(7)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>Аксессуары</a></li>
                <li className='bottom-header-menu-item' onMouseOver={()=>{this.changeOpasity(8)}}  onMouseOut={()=>{this.changeFocus()}}><a href='#'>Акции</a></li>
              </ul>
            </div>
          </div>
          <div className='bottom-header-right'>
            <div className='bottom-header-right_search'>
              <div className='bottom-header-right_search-hover'>
                <div className='bottom-header-right_search-div'></div>
              </div>
            </div>
            <div className='bottom-header-right_emptyBasket'>
              <a href='#'></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}