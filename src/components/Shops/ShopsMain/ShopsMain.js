import React, { Component } from "react";
import "./ShopsMain.css";
import citiesInfo from "../../../jsonFiles/cities";
import { ShopsMainTable } from "./ShopsMainTable/ShopsMainTable";
import { DropDown } from "./DropDown/DropDown";

export class ShopsMain extends Component {
  state = {
    isOpenList: true,
    isOpenMap: false,
    inputValue: "",
    shadow: false,
    shownBlock: false,
    autocomplete: [],
    filteredInfo: [],
    currentCity: ''
  };

  componentDidMount = () => {
    this.setState({
      filteredInfo: this.props.info,
      currentCity: this.props.currentCity
    });
  };

  componentDidUpdate = () => {
    if(this.props.currentCity !== this.state.currentCity){
      this.setState({
        inputValue: '',
        currentCity: this.props.currentCity,
        filteredInfo: this.props.info,
        shownBlock: false
      });
    }   
  }

  changeActiveList = () => {
    this.setState({
      isOpenList: true,
      isOpenMap: false
    });
  };

  changeActiveMap = () => {
    this.setState({
      isOpenList: false,
      isOpenMap: true
    });
  };

  search = e => {
    let arr = [];
    let filteredInfo = this.props.info;
    const val = e.target.value.toLowerCase();
    if (val) {
      filteredInfo = this.props.info.filter(i => {
        return (
          i.address.toLowerCase().indexOf(val) !== -1 ||
          i.metro.some(item => {
            return (
              item.name.toLowerCase().indexOf(val) !== -1
            );
          })
        );
      });

      filteredInfo.forEach(item => {
        const city = item.address.split(",")[0];
        if (item.address.toLowerCase().indexOf(val) !== -1 && !arr.includes(city)) {
          arr.push(city);
        }
        item.metro.forEach(i => {
          const name = `${i.name}, метро`;
          if (i.name.toLowerCase().indexOf(val) !== -1 && !arr.includes(name)) {
            arr.push(name);
          }
        });
      });
    }

    this.setState({
      inputValue: e.target.value.toLowerCase(),
      shownBlock: e.target.value,
      autocomplete: arr,
      filteredInfo
    });
  };

  showShadow = () => {
    this.setState({
      shadow: true
    });
  };

  hideShadow = () => {
    this.setState({
      shadow: false
    });
  };

  selectShop = () => {
    this.setState({
      inputValue: "",
      shownBlock: false
    });
  };

  render() {
    let classesList = "shopMain-links-list";
    classesList += this.state.isOpenList ? " activeList" : "";
    let classesMap = "shopMain-links-map";
    classesMap += this.state.isOpenMap ? " activeMap" : "";

    const shadowClasses = {
      boxShadow: this.state.shadow ? "0 4px 10px rgba(0,0,0,0.1)" : ""
    };

    return (
      <div className="shopMain">
        <div className="shopMain-wrapper">
          <div className="shopMain-header">
            <div className="shopMain-links">
              <span className={classesList} onClick={this.changeActiveList}>
                Списком
              </span>
              <span className={classesMap} onClick={this.changeActiveMap}>
                На карте
              </span>
            </div>
            <div className="shopMain-search">
              <input
                className="shopMain-search-input"
                placeholder="Поиск по адресу и метро"
                onFocus={this.showShadow}
                style={shadowClasses}
                onBlur={this.hideShadow}
                onChange={this.search}
                value={this.state.inputValue}
              />
              <span className="shopMain-search-btn">Найти</span>
              {this.state.shownBlock && (
                <DropDown autocomplete={this.state.autocomplete} />
              )}
            </div>
          </div>
          {this.state.isOpenList && (
            <ShopsMainTable
              info={this.state.filteredInfo}
              currentCity={this.props.currentCity}
              changeActiveMap={this.changeActiveMap}
              inputValue={this.state.inputValue}
            />
          )}
          {this.state.isOpenMap && (
            <iframe
              className="map"
              src={this.props.map}
              width="940"
              height="548"
              frameBorder="0"
              allowfullscreen="true"
            />
          )}
        </div>
      </div>
    );
  }
}
