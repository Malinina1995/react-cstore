import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./shops.css";
import { Breadcrumbs } from '../Breadcrumbs/BreadCrumbs';
import { CitySearch } from '../CityList/CitySearch';
import cities from '../../jsonFiles/cities.json';
import { WelcomeAccordion } from '../WelcomeAccordion/WelcomeAccordion';
import {ShopsMain} from './ShopsMain/ShopsMain';

export class Shops extends Component {
  constructor() {
    this.storage = window.cityStorage;
    this.state = {
      currentCity: '',
      isOpened: false,
      isShops:true
    }
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

  render() {
    const display = {
      display: 'none'
    } 

    const sel =`top-header-geolocation-selector${this.state.isOpened? ' open' : ''}`;

    const arrow = {
      transform: this.state.isOpened ? 'rotate(180deg)' : 'rotate(0deg)'
    }

    const items = [
      { to: "/", label: "Главная" }, 
      { label: this.state.currentCity }
    ];

    let cityInfo = {};
    for(let i = 0; i < cities.length; i++){
      if(cities[i].town === this.storage.getSelection()){
        cityInfo = cities[i].shops;
        break;
      }
    }

    return (
      <div className="shops">
        {this.state.isOpened && <div className='hiddenDiv' onClick={this.toggleCityState}></div>}
        <div className="shops-wrapper">
          <Breadcrumbs items={items}/>
          <div className='shops-title'>
            <span>Магазины в городе </span>
            <div className='shops-title-geo'>
              <div className='shops-title-geo-hover'>
                <span className='shops-currentCity' 
                  onClick={this.toggleCityState}>
                  {this.state.currentCity}
                </span>
                <span className='shops-currentCity-arrow' style={arrow}></span>
              </div>
              {this.state.isOpened && <div className='arrow-top' ></div>}
            </div>
              {this.state.isOpened &&
                <CitySearch
                  toggleCityState={this.toggleCityState} 
                  changeCurrentCity={this.changeCurrentCity}
                  currentCity={this.state.currentCity}
                  show={this.state.isOpened}
                  isShops={this.state.isShops}
                />}
          </div>
          <ShopsMain info={cityInfo} currentCity={this.state.currentCity}/>
        </div>
        <WelcomeAccordion/>
      </div>
    );
  }
}
