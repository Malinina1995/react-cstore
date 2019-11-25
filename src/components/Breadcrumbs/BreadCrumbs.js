import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {Component} from 'react';
import './breadcrumbs';

const BreadcrumbLink = (props) => (
  <div className='breadcrumbs-link-div'>
    <Link key={props.item.to} to={props.item.to} className='breadcrumbs-link'>
      {props.item.label}
    </Link>
  </div>
)

export function Breadcrumbs (props){
  return (
    <div className='crombs'>
      {
        props.items.map(item => {
          return item.hasOwnProperty('to') ? <BreadcrumbLink item={item}/> : <span className='breadcrumbs-label'>{item.label}</span>;
        })
      }
    </div>
  )
}
