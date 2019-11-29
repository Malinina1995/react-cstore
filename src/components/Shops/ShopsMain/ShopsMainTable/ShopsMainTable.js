import React, { Component } from "react";
import "./ShopsMainTable.css";

export class ShopsMainTable extends Component {
  state = {
    info: [],
    currentCity: ""
  };

  showFullInformation = i => {
    this.setState({
      info: this.state.info.map((item, index) => {
        return i === index ? { ...item, open: true } : { ...item, open: false };
      })
    });
  };

  componentDidUpdate = () => {
    if (this.props.currentCity !== this.state.currentCity)
      this.setState({
        info: this.props.info.map(i => {
          return { ...i, open: false };
        }),
        currentCity: this.props.currentCity
      });
  };

  componentDidMount = ()=>{
    this.setState({
      info: this.props.info.map(i => {
        return { ...i, open: false };
      }),
    });
  }

  render() {

    return (
      <div className="shopMain-table">
        <div className="shopMain-table-header">
          <div className="shopMain-table-address">Адрес</div>
          <div className="shopMain-table-metro">Метро</div>
          <div className="shopMain-table-date">Режим работы</div>
        </div>
        <div className="shopMain-table-info">
          {this.state.info.map((item, index) => {
            return (
              <div className="shopMain-table-info-main">
                <div
                  className={item.open ? 'shopMain-table-info-item-hover' : 'shopMain-table-info-item'}
                  key={item.address}
                  onClick={() => {
                    this.showFullInformation(index);
                  }}
                >
                  <div className="shopMain-table-info-item-address">
                    {item.address}
                  </div>
                  <div className="shopMain-table-info-item-metro">
                    {item.metro.map((i, ind) => {
                      return (
                        <div
                          className="shopMain-table-info-item-metro-item"
                          key={i.name + ind}
                        >
                          {i.color && (
                            <div
                              className="shopMain-table-info-item-metro-style"
                              style={{ border: `5px solid ${i.color}` }}
                            />
                          )}
                          <div className="shopMain-table-info-item-metro-name">
                            {i.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="shopMain-table-info-item-period">
                    {item.period}
                  </div>
                </div>
                <div className="shopMain-table-info-item-fullInfo">
                  {item.open && (
                    <div className="shopMain-table-info-item-fullInfo-block">
                      <div className="shopMain-table-info-item-fullInfo-address">
                        <span>Как добраться</span>
                        <p>{item.road}</p>
                      </div>
                      <div className="shopMain-table-info-item-fullInfo-map-links">
                        <div onClick={this.props.changeActiveMap}
                          className="shopMain-table-info-item-fullInfo-map-links-change">
                          Показать на карте
                        </div>
                        <div className="shopMain-table-info-item-fullInfo-map-link">
                          <a href={item.link} target='_blank'>Построить маршрут <br/>на Яндекс картах</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}