import React, { Component } from 'react';
import "./welcomeAccordion.css";
import { FullInfo } from './FullInfo'

export class WelcomeAccordion extends Component {
  state = {
    isShowFullInfo: false
  }

  toggleFullInfo = () => {
    this.setState({
      isShowFullInfo: !this.state.isShowFullInfo
    })
  }

  render() {
    const arrow = {
      transform: this.state.isShowFullInfo ? 'rotate(180deg)' : 'rotate(0deg)'
    }

    return (
      <div className="welcomeAccordion">
        <div className="welcomeAccordion-wrapper">
          <div className="welcomeAccordion-main">
            <div className="welcomeAccordion-title">
              Cstore. Добро пожаловать в мир Apple!
            </div>
            <p>
              Нас отличают высокий уровень сервиса, экспертность продавцов и широкий ассортимент фирменной продукции Apple: Mac, iPad, iPhone, iPod и сопутствующие аксессуары.
            </p>
          </div>
          <FullInfo show={this.state.isShowFullInfo} />
          <div className='show-info'>
            <a className='show-more' onClick={this.toggleFullInfo}>
              {this.state.isShowFullInfo ? "Свернуть подробную информацию" : "Подробнее про Cstore"}
            </a>
            <span className='show-more-span' 
              onClick={this.toggleFullInfo}
              style={arrow}></span>
          </div>
        </div>
      </div>
    );
  }
}
