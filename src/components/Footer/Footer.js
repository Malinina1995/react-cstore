import React, { Component } from 'react';
import './footerStyle.css';
import {ScrollBtn} from '../ScrollBtn/ScrollBtn';

export class Footer extends Component {
  render(){
    return (
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-top-wrapper'>
            <div className='footer-top-title'>
              Узнавай первым!
              <br/>
              Подпишись на рассылку!
            </div>
            <div className='footer-top-form'>
              <form className='footer-top-form-flex'>
                <div  className='footer-top-form-flex-margin'>
                  <input placeholder='Электронная почта' className='footer-top-form-input'/>
                  <div>
                    <input type='checkbox' className='footer-top-form-checkbox'/>Согласен на рассылку
                  </div>
                </div>
                <div>
                  <input type='submit' className='footer-top-form-btn' value='Подписаться'/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='footer-wrapper'>
          <div className='footer-main'>
            <div className='footer-menu'>
              <div className='footer-menu-section'>
                <div className='footer-menu-title'>Cstore</div>
                <ul className='footer-menu-items'>
                  <li><a href='#'>О компании</a></li>
                  <li><a href='#'>Акции и новости</a></li>
                  <li><a href='#'>Оферта</a></li>
                  <li><a href='#'>Контакты</a></li>
                </ul>
              </div>
              <div className='footer-menu-section'>
                <div className='footer-menu-title'>Товары Apple</div>
                <ul className='footer-menu-items second'>
                  <li><a href='#'>iPhone</a></li>
                  <li><a href='#'>Mac</a></li>
                  <li><a href='#'>TV</a></li>
                  <li><a href='#'>iPod</a></li>
                  <li><a href='#'>iPad</a></li>
                  <li><a href='#'>Watch</a></li>
                  <li><a href='#'>Beats</a></li>
                  <li><a href='#'>Аксессуары</a></li>
                </ul>
              </div>
              <div className='footer-menu-section'>
                <div className='footer-menu-title'>Помощь покупателю</div>
                <ul className='footer-menu-items'>
                  <li><a href='#'>Доставка и оплата</a></li>
                  <li><a href='#'>Покупка в кредит</a></li>
                  <li><a href='#'>Адреса магазинов</a></li>
                  <li><a href='#'>Гарантия и сервис</a></li>
                  <li><a href='#'>Trade-In</a></li>
                  <li><a href='#'>Обмен и возврат</a></li>
                </ul>
              </div>
            </div>
            <div className='footer-info'>
              <div className='footer-phone'>
                <a href='tel:88007003366'>8(800) 700-33-66</a>
              </div>
              <div className="footer-info-socials">
                <a href='https://www.facebook.com/Cstore.official/' className="fb"></a>
                <a href='https://vk.com/cstore.official' className='vk'></a>
                <a href='https://www.instagram.com/cstore_ru/' className='inst'></a>
              </div>
              <div className='footer-info-logo'>
                <a href='/'>
                  <div className='footer-info-logo-left'></div>
                  <div className='footer-info-logo-right'></div>
                </a>
              </div>
            </div>
          </div>
          <div className='footer-copy'>
            © Cstore — Apple Premium Reseller 2019. Указанная стоимость товаров и условия их приобретения действительны по состоянию на текущую дату.
          </div>
        </div>
        <ScrollBtn/>
      </div>
    )
  }
}