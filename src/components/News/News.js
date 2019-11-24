import React, { Component } from 'react';
import { Item } from './Item';
import item from '../../jsonFiles/news.json';
import './newsStyle.css';

export class News extends Component {
  render(){
    return (
      <div className='news'>
        <div className='news-wrapper'>
          <div className='news-title'>
            <a href='#'>
              Акции и новости
              <i></i>
            </a>
          </div>
          <div className='items'>
            {
              item.map((i, index) => {
                return (
                  <Item item={i} key={i+index}/>
                )
              })
            }
          </div>     
        </div>
      </div>
    )
  }
}