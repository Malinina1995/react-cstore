import React, { Component } from "react";
import { ListOfCities } from "./ListOfCities";
import './listOfCities.css';
import cities from '../../jsonFiles/cities.json';

export class CitySearch extends Component {
  state = {
    showInputClose: false,
    neededBorder: false,
    showSearchList: false,
    townsArray: cities,
    inputValue: ''
  };

  showClear = () => {
    this.setState({
      showInputClose: true,
      neededBorder: true
    });
  };

  hideClear = () => {
    this.setState({
      showInputClose: this.state.inputValue ? true : false,
      neededBorder: false
    });
  };

  clearInput = () => {
    this.setState({
      showInputClose: false,
      neededBorder: false,
      showSearchList: false,
      inputValue:''
    });
  };

  search = e => {
    this.setState({
      showSearchList: true,
      inputValue: e.target.value
    });
  };

  change = n => {
    this.props.changeCurrentCity(n);
  };

  render() {
    const arr = this.state.townsArray.filter((i)=>{
      return i.town.toLowerCase().indexOf(this.state.inputValue) !== -1;
    });

    const display = {
      display: this.props.show ? "block" : "none"
    };

    const showed = {
      display: this.state.showInputClose ? "block" : "none"
    };

    const border = {
      border:
        this.state.showInputClose && this.state.neededBorder
          ? "solid 1px #3E8FCF"
          : "solid 1px #c2c2c2"
    };

    return (
      <div className="top-header-geolocation-city" style={display}>
        <div className="top-header-geolocation-city-header">
          <div
            className="top-header-geolocation-city-header-close"
            onClick={this.props.toggleCityState}
          />
          <div className="top-header-geolocation-city-header-title">
            Выбор города
          </div>
          <div className="top-header-geolocation-city-header-cities">
            Всего 23 города
          </div>
          <div className="top-header-geolocation-city-header-cities-search">
            <input
              placeholder="Для поиска введите название города"
              className="search-cities-input"
              style={border}
              onFocus={this.showClear}
              onBlur={this.hideClear}
              onChange={this.search}
              value={this.state.inputValue}
            />
            <span
              className="top-header-geolocation-city-header-cities-search-clear"
              style={showed}
              onClick={this.clearInput}
            />
            <button className="search-cities-btn" onClick={this.hideClear} />
          </div>
        </div>
        <div className="top-header-geolocation-city-main">
          <div className="top-header-geolocation-city-main-column">
            {!this.state.showSearchList || !this.state.inputValue ? (
              <ListOfCities changeCurrentCity={this.props.changeCurrentCity} currentCity={this.props.currentCity}/>
            ) : !arr.length? (
              <div className="top-header-nothing">
                Ничего не найдено по запросу:{" "}
                <span className="top-header-nothing-span">
                  {this.state.inputValue}
                </span>
              </div>
            ) : (
              arr.map(city => {
                return (
                  <div
                    className="top-header-geolocation-city-main-row"
                    key={city.id}
                  >
                    <span
                      onClick={() => {
                        this.props.changeCurrentCity(city.town);
                      }}
                    >
                      {city.town}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}
