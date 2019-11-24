import React, { Component } from 'react';
import { FiltersHeader } from './FiltersHeader';
import { FiltersMain } from './FiltersMain';
import newProducts from '../../jsonFiles/newProducts.json';
import popularProducts from '../../jsonFiles/popularProducts.json';
import recommendedProducts from '../../jsonFiles/recommendedProducts.json';
import './filtersStyle.css';

export class Filters extends Component {
  state = {
    headers: [
      {
        title:'Новинки',
        products: newProducts
      },
      {
        title:'Популярное',
        products: popularProducts
      },
      {
        title:'Рекомендуем',
        products: recommendedProducts
      }
    ],
    currentFilter: {
      title:'Новинки',
      products: newProducts
    }
  }

  changeFiltersData = (n) => {
    this.setState({
      currentFilter: this.state.headers[n]
    })
  }

  render(){
    return (
      <div className='filters'>
          <FiltersHeader headers={this.state.headers} changeFiltersData={this.changeFiltersData}/>
          <FiltersMain currentFilter={this.state.currentFilter}/>
      </div>
    )
  }
}