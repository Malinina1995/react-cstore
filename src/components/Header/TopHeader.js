import React, { Component } from 'react';
import { CitySearch } from '../CityList/CitySearch';
import { Link } from "react-router-dom";

export class TopHeader extends Component {
  state = {
    isOpened: false,
    currentCity: "",
  }

  constructor() {
    this.storage = window.cityStorage;
  }

  toggleCityState= () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  changeCurrentCity = (city) => {
    this.storage.setSelection(city);
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  componentDidMount = () => {
    this.setState({
      currentCity: this.storage.getSelection()
    });
    this.storage.subscribe(city => {
      this.setState({
        currentCity: city
      });
    });
  }

  render(){
    const display = {
      display: 'none'
    } 

    const arrow = {
      transform: this.state.isOpened ? 'rotate(180deg)' : 'rotate(0deg)'
    }

    const sel =`top-header-geolocation-selector${this.state.isOpened? ' open' : ''}`;

    return (
      <div className='top-header'>
        {this.state.isOpened && <div className='hiddenDiv' onClick={this.toggleCityState}></div>}
        <div className='top-header-wrapper'>
          <div className='top-header-geolocation'>
            <div className={sel} onClick={this.toggleCityState}>
              <span>{this.state.currentCity}</span>
              <div className='top-header-geolocation-selector_arrow' style={arrow}></div>
            </div>
            {this.state.isOpened &&
              <CitySearch 
                toggleCityState={this.toggleCityState} 
                changeCurrentCity={this.changeCurrentCity}
                currentCity={this.state.currentCity}
                show={this.state.isOpened}
              />}
          </div>
          <div className='top-header-flex'>
            <div className='top-header-nav'>
              <div>
                <ul className='top-header-nav-items'>
                  <li><Link to='/corp'>Решения для бизнеса</Link></li>
                  <li><Link to='/shops'>Магазины</Link></li>
                  <li><Link to='/delivery'>Доставка и оплата</Link></li>
                  <li><Link to='/login'>Личный кабинет</Link></li>
                </ul>
              </div>
            </div>
            <div className='top-header-phone'>
              <a href='tel:88007003366'>8(800) 700-33-66</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}