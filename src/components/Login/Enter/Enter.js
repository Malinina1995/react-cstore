import React, { Component } from "react";
import "./Enter.css";

export class Enter extends Component {
  state = {
    needBorderFirst: false,
    needBorderSecond: false
  };

  borderFirst = () => {
    this.setState({
      needBorderFirst: true
    });
  };

  borderSecond = () => {
    this.setState({
      needBorderSecond: true
    });
  };

  noBorderFirst = () => {
    this.setState({
      needBorderFirst: false
    });
  };

  noBorderSecond = () => {
    this.setState({
      needBorderSecond: false
    });
  };

  render() {
    const borderFirst = {
      border: this.state.needBorderFirst
        ? "solid 1px #3E8FCF"
        : !this.state.needBorderFirst
        ? ""
        : "solid 1px #c2c2c2"
    };

    const borderSecond = {
      border: this.state.needBorderSecond
        ? "solid 1px #3E8FCF"
        : !this.state.needBorderSecond
        ? ""
        : "solid 1px #c2c2c2"
    };

    return (
      <div className="enter-flex">
        <div className="enter-form">
          <div className="enter-title">Войти с паролем</div>
          <form>
            <div className="enter-input">
              <input
                placeholder="Логин или email"
                onFocus={this.borderFirst}
                onBlur={this.noBorderFirst}
                style={borderFirst}
              />
            </div>
            <div className="enter-input">
              <input
                placeholder="Пароль"
                onFocus={this.borderSecond}
                onBlur={this.noBorderSecond}
                style={borderSecond}
              />
            </div>
            <div className="enter-controls">
              <button>Войти</button>
              <a>Забыли пароль?</a>
            </div>
          </form>
        </div>
        <div className="enter-socials">
          <div className="enter-title">Войти с помощью соцсетей</div>
          <div className="enter-socials-items">
            <a className="enter-socials-item _google" title="Google" />
            <a className="enter-socials-item _yandex" title="Yandex" />
            <a className="enter-socials-item _vk" title="VKontakte" />
            <a className="enter-socials-item _facebook" title="Fаcebook" />
            <a className="enter-socials-item _ok" title="Odnoklassniki" />
            <a className="enter-socials-item _mail" title="Mail.Ru" />
          </div>
        </div>
      </div>
    );
  }
}
