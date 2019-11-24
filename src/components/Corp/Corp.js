import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {Component} from 'react';
import './corp.css';
import corpInfo from '../../jsonFiles/corpInfo.json';

export function Corp() {

  return (
    <div className='corp'>
      <div className='corp-wrapper'>
        <div className='crombs'></div>
        <h1 className='corp-title'>Решения для бизнеса</h1>
        <div className='corp-content'>
          <div className='corp-start'>
            <p>
              Добро пожаловать в мир Apple! Магазины Cstore и сайт c-store.ru – это уникальная территория с особенными эмоциями и атмосферой, которая создана, чтобы менять жизнь к лучшему!
            </p>
          </div>
          <div className='corp-main-info'>
            <p><strong>Адрес:</strong>115280, Москва,</p>
            <p>ул. Ленинская Слобода, д. 26, ком. 11</p>
            <p><strong>Телефон: </strong>8 (800) 700-33-66</p>
            <p>
              <strong>E-mail: </strong>
              <a href="mailto:corp@c-store.ru">corp@c-store.ru</a>
            </p>
          </div>
          <div className='corp-image'></div>
        </div>
        <div className='corp-info'>
          {
            corpInfo.map((corp)=> {
              return(
                <div className='corp-info-item' key={corp.id}>
                  <div className='corp-info-title'>{corp.title}</div>
                  <div className='crop-info-text'>{corp.text}</div>
                </div>
              )
            })
          }
          <p>Сотрудники сети Cstore влюблены в продукцию Apple и готовы поделиться этим чувством с вами!</p>
        </div>
      </div>
    </div>
  );
}
