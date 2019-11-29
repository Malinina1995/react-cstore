import React, { Component } from "react";
import "./ShopsMain.css";
import citiesInfo from "../../../jsonFiles/cities";
import { ShopsMainTable } from "./ShopsMainTable/ShopsMainTable";

export class ShopsMain extends Component {
  state = {
    isOpenList: true,
    isOpenMap: false,
    inputValue: '',
    shadow: false
  };

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

  search = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  showShadow = () => {
    this.setState({
      shadow: true
    });
  }

  hideShadow = () => {
    this.setState({
      shadow: false
    });
  }

  render() {
    let classesList = "shopMain-links-list";
    classesList += this.state.isOpenList ? " activeList" : "";
    let classesMap = "shopMain-links-map";
    classesMap += this.state.isOpenMap ? " activeMap" : "";

    const shadowClasses = {
      boxShadow: this.state.shadow ? '0 4px 10px rgba(0,0,0,0.1)' : ''
    }

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
              />
              <span className="shopMain-search-btn">Найти</span>
            </div>
          </div>
          {this.state.isOpenList && (
            <ShopsMainTable
              info={this.props.info}
              currentCity={this.props.currentCity}
              changeActiveMap={this.changeActiveMap}
            />
          )}
          {
            this.state.isOpenMap && (
              <iframe className='map' src={this.props.map} width="940" height="548" frameBorder="0" allowfullscreen="true"></iframe>
            )
          }
        </div>
      </div>
    );
  }
}
