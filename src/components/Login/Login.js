import React, { Component } from "react";
import "./Login.css";
import { Breadcrumbs } from "../Breadcrumbs/BreadCrumbs";
import { Enter } from './Enter/Enter';
import { Registration } from './Registration/Registration';
import { WelcomeAccordion } from '../WelcomeAccordion/WelcomeAccordion';

const items = [{ to: "/", label: "Главная" }, { label: "Авторизация" }];

export class Login extends Component {
  state = {
    openedEnter: true,
    openedRegistration: false
  };

  changeToEnter = () => {
    this.setState({
      openedEnter: true,
      openedRegistration: false
    });
  };

  changeToRegistration = () => {
    this.setState({
      openedEnter: false,
      openedRegistration: true
    });
  };

  render() {
    let classesEnter = 'login-title-flex-filter';
    let classesRegistration = classesEnter;
    classesEnter += this.state.openedEnter ? ' login-title-active' : '';
    classesRegistration += this.state.openedRegistration ? ' login-title-active' : '';

    return (
      <div className="login">
        <div className="login-wrapper">
          <Breadcrumbs items={items} />
          <h1 className="login-title">Войти на сайт</h1>
          <div className='login-title-flex'>
              <div className={classesEnter} onClick={this.changeToEnter}>Вход</div>
              <div className={classesRegistration} onClick={this.changeToRegistration}>Регистрация</div>
          </div>
          {
            this.state.openedEnter ? <Enter /> : <Registration />
          }
        </div>
        <WelcomeAccordion />
      </div>
    );
  }
}
