import React, { Component } from "react";
import "./ShopsMain.css";

export class ShopsMain extends Component {
  state = {
    isOpenList: true,
    isOpenMap: false
  }

  changeActiveList = () => {
    this.setState({
      isOpenList: true,
      isOpenMap: false
    })
  }

  changeActiveMap = () => {
    this.setState({
      isOpenList: false,
      isOpenMap: true
    })
  }

  render() {
    let classesList = 'shopMain-links-list';
    classesList += this.state.isOpenList ? ' activeList' : '';
    let classesMap = 'shopMain-links-map';
    classesMap += this.state.isOpenMap ? ' activeMap' : '';

    return (
      <div className="shopMain">
        <div className="shopMain-wrapper">
          <div className="shopMain-header">
            <div className="shopMain-links">
              <span className={classesList} onClick={this.changeActiveList}>Списком</span>
              <span className={classesMap} onClick={this.changeActiveMap}>На карте</span>
            </div>
            <div className="shopMain-search">
              <input 
                className="shopMain-search-input"
                placeholder="Поиск по адресу и метро"
              />
              <span className='shopMain-search-btn'>Найти</span>
            </div>
          </div>
          {this.state.isOpenList && <div className='shopMain-table'>
            <div className='shopMain-table-header'>
              <div className='shopMain-table-address'>Адрес</div>
              <div className='shopMain-table-metro'>Метро</div>
              <div className='shopMain-table-date'>Режим работы</div>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}
