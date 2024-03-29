import React, { Component } from "react";
import './delivery.css';
import { Breadcrumbs } from '../Breadcrumbs/BreadCrumbs';
import { DeliveryMethods } from './DeliveryMethods/DeliveryMethods';
import { WaysOfPayment } from './WaysOfPayment/WaysOfPayment';
import { Banner } from '../Home/BannerForHomePage/Banner';
import { WelcomeAccordion } from '../WelcomeAccordion/WelcomeAccordion';
import { FiltersMain } from '../Home/Filters/FiltersMain';
import salesLeaders from '../../jsonFiles/salesLeaders.json';

const items = [
  { to: '/', label: 'Главная' },
  { label: 'Способы доставки' }
]

export class Delivery extends Component {
  state = {
    openedDelivery: true,
    openedPayments: false
  }

  changeToDelivery = () => {
    this.setState({
      openedDelivery: true,
      openedPayments: false
    });
  };

  changeToPayments = () => {
    this.setState({
      openedDelivery: false,
      openedPayments: true
    });
  };

  render() {
    let classesDelivery = 'delivery-title-flex-filter';
    let classesPayments = classesDelivery;
    classesDelivery += this.state.openedDelivery ? ' delivery-title-active' : '';
    classesPayments += this.state.openedPayments ? ' delivery-title-active' : '';

    const currentFilter = {
      title: 'Лидеры продаж',
      products: salesLeaders
    }

    const delivery = true;

    return (
      <div className="delivery">
        <div className="delivery-wrapper">
          <Breadcrumbs items={items}/>
          <div className='delivery-header'>
            <div className='delivery-title'>Доставка и оплата</div>
            <div className='delivery-title-flex'>
              <div className={classesDelivery} onClick={this.changeToDelivery}>Способы доставки</div>
              <div className={classesPayments} onClick={this.changeToPayments}>Способы оплаты</div>
            </div>
          </div>
          <DeliveryMethods openedDelivery={this.state.openedDelivery}/>
        </div>
        <Banner/>
        <div className='delivery-header-marginTop'>
          <FiltersMain currentFilter={currentFilter} delivery={delivery}/>
        </div>
        <WelcomeAccordion/>
      </div>
    );
  }
}
