import React, { Component } from 'react';
import { ProductForFilter } from './ProductForFilter';

export function FiltersMain({currentFilter, delivery}) {
    return (
      <div className='filtersMain'>
        <div className='filtersMain-wrapper'>
          <div className='currentFilter'>{currentFilter.title}</div>
          <div className='filterMain-products'>
            {currentFilter.products.map((prod)=>{
              return (
                <div className='filterMain-product' key={prod.url}>
                  <ProductForFilter product={prod} delivery={delivery}/>
                </div>
                );
            })}
          </div>          
        </div>
      </div>
    )
}