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
          <a className='show-more' onClick={this.toggleFullInfo}>
            {this.state.isShowFullInfo ? "Свернуть подробную информацию" : "Подробнее про Cstore"}
          </a>
          <span ></span>
        </div>
      </div>
    );
  }
}
