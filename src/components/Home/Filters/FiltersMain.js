import React, { Component } from 'react';
import { ProductForFilter } from './ProductForFilter';

export class FiltersMain extends Component {
  render(){
    return (
      <div className='filtersMain'>
        <div className='filtersMain-wrapper'>
          <div className='currentFilter'>{this.props.currentFilter.title}</div>
          <div className='filterMain-products'>
            {this.props.currentFilter.products.map((prod)=>{
              return (
                <div className='filterMain-product' key={prod.url}>
                  <ProductForFilter product={prod}/>
                </div>
                );
            })}
          </div>          
        </div>
      </div>
    )
  }
}